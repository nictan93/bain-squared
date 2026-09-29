import assert from 'node:assert/strict';
import {createHmac,randomUUID} from 'node:crypto';
import {Readable} from 'node:stream';
import handler from '../api/intake';
const secret='test-secret-'.repeat(4);
process.env.BS_INTAKE_SECRET=secret;
process.env.BS_INTAKE_URL='https://script.google.com/macros/s/test/exec';
const body={requestId:randomUUID(),kind:'enquiry',first:'Website',last:'Test',email:'test@example.com',organization:'Bain Squared',jobTitle:'Testing',service:'Agentic AI Automation',message:'Integration test',terms:true,website:''};
let calls=0;let upstream:unknown={ok:true,reference:'saved-123'};
globalThis.fetch=async (_url,options)=>{
 calls++;const envelope=JSON.parse(String(options?.body));
 assert.equal(envelope.signature,createHmac('sha256',secret).update(envelope.payload).digest('hex'));
 const data=JSON.parse(envelope.payload);assert.equal(data.requestId,body.requestId);assert.equal(data.answers['Area of interest'],'AI automation');assert.equal(data.clientHash.length,64);
 return new Response(JSON.stringify(upstream),{status:200});
};
async function call(data:unknown=body,method='POST',origin='https://bain-squared.vercel.app'){
 const req=Object.assign(Readable.from([]),{method,headers:{origin,'content-type':'application/json','x-vercel-forwarded-for':'192.0.2.1'},body:data});
 let status=0,result:any;const res={set statusCode(v:number){status=v;},setHeader(){},end(v:string){result=JSON.parse(v);}};
 await handler(req as any,res as any);return {status,result};
}
assert.equal((await call(body,'GET')).status,405);
assert.equal((await call(body,'POST','https://untrusted.example')).status,403);
assert.equal((await call('{bad')).status,400);
assert.equal((await call({...body,terms:false})).status,400);
assert.equal((await call({...body,website:'bot'})).status,400);assert.equal(calls,0);
assert.deepEqual(await call(),{status:200,result:{ok:true,reference:'saved-123'}});
upstream={ok:true};assert.equal((await call()).status,502);
upstream={code:'rate_limit'};assert.equal((await call()).status,429);
delete process.env.BS_INTAKE_SECRET;assert.equal((await call()).status,503);
console.log('PASS: method/origin, malformed input, consent, honeypot, HMAC and field mapping, receipt required, rate-limit and missing-config handling.');
