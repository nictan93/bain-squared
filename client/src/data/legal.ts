import type { Block } from "@/components/ArticleBody";

/**
 * Long-form legal copy for Privacy Policy and Terms of Use.
 * Singapore PDPA + GDPR aware. Operator-led, plain English where possible.
 * No em dashes. No banned vocabulary.
 */

export const PRIVACY_BLOCKS: Block[] = [
  {
    type: "p",
    text: "We, **Bain Squared Pte. Ltd.**, a company incorporated in Singapore with registered office at 7 Temasek Boulevard, Suntec Tower One, Singapore 038987, understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data. This Privacy Notice describes how we handle and protect your personal data (the \"Privacy Notice\") when we collect it through our website at bainsquared.com, our applications, and our digital assets (collectively, the \"Sites\"), and through our externally facing business activities, such as service offerings, events, surveys, and communications.",
  },
  {
    type: "p",
    text: "This Privacy Notice is issued in accordance with the Singapore Personal Data Protection Act 2012 (the \"PDPA\") and, where applicable, the EU General Data Protection Regulation (the \"GDPR\") and the UK GDPR.",
  },
  {
    type: "p",
    text: "For the purposes of this Privacy Notice, **personal data** means information about an identified or identifiable individual, and does not include information that cannot be attributed to an identifiable individual, such as information of an anonymous or aggregated nature. You are not required to share your personal data with us, but failing to do so may result in Bain Squared being unable to properly provide you with our full range of services, communications, or a usable experience with our Sites.",
  },
  {
    type: "p",
    text: "By accessing our Sites or engaging us in any of the activities described above, you confirm that you have read and understand the terms of this Privacy Notice. If you do not agree with any part of it, please refrain from using our Sites and contact us for clarification before proceeding.",
  },
  {
    type: "p",
    text: "See our [Terms of Use](#/terms) for the other terms that apply to your use of our Sites.",
  },

  { type: "h2", text: "Contents" },
  {
    type: "list",
    ordered: true,
    items: [
      "Data controller",
      "How we collect your personal data",
      "Why and how we use your personal data",
      "Who we share your personal data with",
      "International transfers of personal data",
      "How long we keep your personal data",
      "How we protect your personal data",
      "Your rights",
      "Cookies and similar technologies",
      "Children",
      "Updates to this Privacy Notice",
      "Contact us",
    ],
  },

  { type: "h2", text: "1. Data controller" },
  {
    type: "p",
    text: "**Bain Squared Pte. Ltd.** is the data controller responsible for the personal data we collect and process through the Sites and through our business activities. For the purposes of the PDPA, we are the organisation that determines the purposes and means of the processing of your personal data. Where the GDPR applies, we act as the data controller, unless we have been engaged by a client to process personal data on their behalf, in which case we act as a data processor under our agreement with that client.",
  },

  { type: "h2", text: "2. How we collect your personal data" },
  {
    type: "p",
    text: "We collect personal data in the course of our business activities directly from you and, in some cases, from third parties.",
  },
  {
    type: "p",
    text: "We collect personal data about you when:",
  },
  {
    type: "list",
    items: [
      "You contact us by email, web form, or telephone to enquire about our services or to request information.",
      "You sign up to receive our publications, including Perspectives, Squared Reports, Looking Glass, or Field Notes.",
      "You attend or register for an event, briefing, or roundtable that we run.",
      "You participate in a client engagement, either as the client signatory or as a member of the client team.",
      "You apply for a role with us through our Careers pages or through a recruiter we work with.",
      "You interact with us on professional social media platforms such as LinkedIn.",
      "You visit our Sites, including when you manage your cookie preferences.",
    ],
  },
  {
    type: "p",
    text: "We may also receive personal data about you from **third parties**, including service providers, data vendors, public business registries, and your employer where you are a member of a client team. Where we collect personal data from third parties, we take reasonable steps to confirm that the third party has lawfully collected the data and is authorised to share it with us for the purposes described in this Privacy Notice.",
  },

  { type: "h2", text: "3. Why and how we use your personal data" },
  {
    type: "p",
    text: "We use your personal data only for the purposes for which it was collected, or for purposes that are closely related, unless we obtain your further consent or are otherwise permitted by law.",
  },
  {
    type: "p",
    text: "Specifically, we use your personal data to:",
  },
  {
    type: "list",
    items: [
      "Respond to your enquiries and provide the information or services you have requested.",
      "Deliver our advisory services and manage our client engagements, including communicating with you, preparing deliverables, and operating the working tools we use during a project.",
      "Send you our publications and event invitations where you have asked to receive them.",
      "Run our recruiting process if you have applied for a role with us.",
      "Operate, secure, and improve our Sites.",
      "Comply with our legal, regulatory, and professional obligations.",
      "Detect, prevent, and respond to fraud, security incidents, and other unlawful activity.",
    ],
  },
  {
    type: "p",
    text: "Where the GDPR applies, our lawful bases for processing your personal data are: (a) **performance of a contract** with you or with the client you represent; (b) our **legitimate interests** in operating, securing, and developing our business; (c) compliance with a **legal obligation**; and (d) where required, your **consent**, which you may withdraw at any time without affecting the lawfulness of processing carried out before withdrawal.",
  },

  { type: "h2", text: "4. Who we share your personal data with" },
  {
    type: "p",
    text: "We do not sell your personal data. We share personal data only as needed to run our business and only with parties that are subject to appropriate confidentiality and data protection commitments.",
  },
  {
    type: "p",
    text: "The categories of recipients we share personal data with include:",
  },
  {
    type: "list",
    items: [
      "**Our personnel**, including partners, employees, and contracted operators working on the engagement.",
      "**Clients**, where the personal data is collected in the course of delivering services to them.",
      "**Service providers** that support our operations, including hosting, email, productivity software, analytics, payments, professional advisers, and recruiting platforms.",
      "**Regulators, courts, and law enforcement**, where we are required by law to do so.",
      "**Acquirers or successors**, in the event of a reorganisation, merger, sale, or similar transaction.",
    ],
  },

  { type: "h2", text: "5. International transfers of personal data" },
  {
    type: "p",
    text: "We are headquartered in Singapore and may transfer your personal data to, and store and process it in, jurisdictions outside Singapore, including jurisdictions whose data protection laws may differ from those of your home country.",
  },
  {
    type: "p",
    text: "Where required by the PDPA, we will take reasonable steps to ensure that the recipient is bound by legally enforceable obligations to provide a standard of protection that is comparable to the protection under the PDPA. Where required by the GDPR or UK GDPR, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses or the UK International Data Transfer Addendum.",
  },

  { type: "h2", text: "6. How long we keep your personal data" },
  {
    type: "p",
    text: "We retain your personal data only for as long as needed for the purposes for which it was collected, to comply with our legal, regulatory, and professional obligations, and to resolve disputes and enforce our agreements. When we no longer need your personal data, we will either delete it or anonymise it so that it can no longer be associated with you.",
  },

  { type: "h2", text: "7. How we protect your personal data" },
  {
    type: "p",
    text: "We maintain reasonable administrative, technical, and physical safeguards designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, and unauthorised access. These include access controls on our systems, encryption in transit and at rest where appropriate, vendor due diligence, and ongoing security training for our team. No method of transmission over the internet or method of electronic storage is fully secure, and we cannot guarantee absolute security.",
  },

  { type: "h2", text: "8. Your rights" },
  {
    type: "p",
    text: "Subject to applicable law, you have the following rights in relation to your personal data:",
  },
  {
    type: "list",
    items: [
      "**Access.** You may request a copy of the personal data we hold about you.",
      "**Correction.** You may ask us to correct personal data that is inaccurate or incomplete.",
      "**Withdrawal of consent.** Where we rely on your consent, you may withdraw it at any time. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.",
      "**Deletion.** Where the GDPR or UK GDPR applies, you may ask us to delete your personal data in certain circumstances.",
      "**Restriction and objection.** Where the GDPR or UK GDPR applies, you may ask us to restrict our processing of your personal data or object to it in certain circumstances.",
      "**Portability.** Where the GDPR or UK GDPR applies, you may ask us to provide your personal data in a structured, commonly used, machine-readable format.",
      "**Complaint.** You may lodge a complaint with the Personal Data Protection Commission of Singapore or, where applicable, your local data protection authority.",
    ],
  },
  {
    type: "p",
    text: "To exercise any of these rights, please contact us using the details in the **Contact us** section below. We may need to verify your identity before responding.",
  },

  { type: "h2", text: "9. Cookies and similar technologies" },
  {
    type: "p",
    text: "Our Sites use cookies and similar technologies to operate the Sites, remember your preferences, measure traffic, and understand how visitors use our content. You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our Sites.",
  },

  { type: "h2", text: "10. Children" },
  {
    type: "p",
    text: "Our Sites and services are intended for an adult business audience. We do not knowingly collect personal data from individuals under the age of 18. If you believe we have collected personal data from a child, please contact us so that we can take appropriate steps to delete it.",
  },

  { type: "h2", text: "11. Updates to this Privacy Notice" },
  {
    type: "p",
    text: "We may update this Privacy Notice from time to time to reflect changes in our practices, our services, or applicable law. The current version is always posted at this URL, with the **Last updated** date at the top of the page. Where the change is material, we will provide a more prominent notice or, where required by law, seek your consent.",
  },

  { type: "h2", text: "12. Contact us" },
  {
    type: "p",
    text: "If you have any questions about this Privacy Notice or about how we handle your personal data, or if you would like to exercise any of your rights, please contact us at [hello@bainsquared.com](mailto:hello@bainsquared.com) or by post at:",
  },
  { type: "address", lines: ["Bain Squared Pte. Ltd.", "7 Temasek Boulevard", "Suntec Tower One", "Singapore 038987"] },
];

export const TERMS_BLOCKS: Block[] = [
  {
    type: "p",
    text: "**Bain Squared Pte. Ltd.** and its affiliates (\"Bain Squared\", \"we\", or \"us\") provide the content on our website at bainsquared.com and on any application or digital asset that links to these Terms of Use (the \"Site\") subject to the following terms and conditions (the \"Terms\"). We may periodically change the Terms without prior notice, so please check back from time to time. By accessing and using the Site, you agree to these Terms.",
  },
  {
    type: "p",
    text: "For an explanation of how we collect, use, and store personal data, please read our [Privacy Policy](#/privacy).",
  },

  { type: "h2", text: "1. Copyrights" },
  {
    type: "p",
    text: "All content and functionality on the Site, including text, graphics, logos, icons, images, audio, video, software, frameworks, and the selection and arrangement of any of the foregoing, together with any concepts, know-how, methodologies, models, processes, and industry perspectives underlying or embedded in the foregoing (the \"Site Content\"), is the exclusive property of Bain Squared or its licensors and is protected by Singapore and international copyright laws.",
  },
  {
    type: "p",
    text: "Neither the Site Content nor the functionality of the Site may be copied, reproduced, modified, reverse engineered, altered (including the removal or disabling of any security or technological safeguards, disclaimers, or legends), uploaded, published, posted, transmitted, or distributed in any way without our prior written permission, except for those uses specified in **Section 3 (Use of Site Content)**. All rights not expressly granted are reserved.",
  },

  { type: "h2", text: "2. Trademarks" },
  {
    type: "p",
    text: "The trademarks, service marks, designs, and logos displayed on the Site (the \"Trademarks\") are the registered and unregistered trademarks of Bain Squared and its licensors. You agree that, except as expressly permitted by us, you will not refer to or attribute any information to Bain Squared in any public medium for advertising or promotion purposes, and you will not use or reproduce the Trademarks in any manner that is likely to cause confusion, take unfair advantage, or imply any endorsement by or relationship with Bain Squared that does not exist.",
  },

  { type: "h2", text: "3. Use of Site Content" },
  {
    type: "p",
    text: "You may view, download, and print Site Content for your own personal, non-commercial reference, provided that you keep all copyright and other proprietary notices intact and do not modify the Site Content in any way.",
  },
  {
    type: "p",
    text: "You may quote short excerpts of Site Content in your own work, provided that you credit Bain Squared as the source and link back to the original page on the Site. You may not (a) republish Site Content in full, (b) sell, license, or sublicense Site Content, (c) use Site Content to train any machine learning model or to populate any database that is made available to third parties, or (d) use Site Content in any way that suggests Bain Squared endorses your work or your organisation.",
  },

  { type: "h2", text: "4. User submissions" },
  {
    type: "p",
    text: "Any information, comments, or material you send to us through the Site or by email, including any feedback or suggestions about our content or services, is non-confidential. You grant Bain Squared a perpetual, worldwide, royalty-free, irrevocable, non-exclusive licence to use, reproduce, modify, adapt, publish, translate, distribute, and display that material for any purpose, in any media. You represent that you own or otherwise control the rights to the material you submit and that the material does not infringe the rights of any third party.",
  },

  { type: "h2", text: "5. Disclaimers" },
  {
    type: "p",
    text: "The Site and the Site Content are provided on an \"as is\" and \"as available\" basis. To the maximum extent permitted by law, Bain Squared makes no representations or warranties of any kind, express or implied, regarding the Site or the Site Content, including any warranties of merchantability, fitness for a particular purpose, accuracy, non-infringement, or freedom from error or interruption.",
  },
  {
    type: "p",
    text: "The Site Content is provided for general information and does not constitute professional advice. You should not act or refrain from acting on the basis of any Site Content without seeking appropriate professional advice based on your particular circumstances. Any reliance you place on the Site Content is strictly at your own risk.",
  },

  { type: "h2", text: "6. Limitation of liability" },
  {
    type: "p",
    text: "To the maximum extent permitted by law, Bain Squared, its affiliates, and their respective partners, directors, employees, and agents will not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages of any kind arising out of or in connection with your access to or use of the Site or the Site Content, even if Bain Squared has been advised of the possibility of such damages.",
  },
  {
    type: "p",
    text: "Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited under applicable law.",
  },

  { type: "h2", text: "7. Third-party links" },
  {
    type: "p",
    text: "The Site may contain links to websites operated by third parties. We provide those links for convenience only and do not control, endorse, or assume responsibility for the content, privacy practices, or operation of any third-party website. Your use of any third-party website is subject to the terms and policies of that website.",
  },

  { type: "h2", text: "8. Indemnification" },
  {
    type: "p",
    text: "You agree to indemnify, defend, and hold harmless Bain Squared, its affiliates, and their respective partners, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with (a) your access to or use of the Site or the Site Content, (b) your violation of these Terms, or (c) your infringement of any third-party right.",
  },

  { type: "h2", text: "9. Termination" },
  {
    type: "p",
    text: "We may suspend or terminate your access to the Site at any time, without notice, for any reason, including any breach of these Terms. Upon termination, the provisions of these Terms that by their nature should survive, including the provisions on copyrights, trademarks, disclaimers, limitation of liability, indemnification, and governing law, will continue to apply.",
  },

  { type: "h2", text: "10. Governing law and jurisdiction" },
  {
    type: "p",
    text: "These Terms are governed by the laws of **Singapore**, without regard to its conflict of laws principles. You agree to submit to the exclusive jurisdiction of the courts of Singapore for the resolution of any dispute arising out of or in connection with these Terms or your use of the Site.",
  },

  { type: "h2", text: "11. Changes to these Terms" },
  {
    type: "p",
    text: "We may revise these Terms at any time by updating this page. By continuing to access or use the Site after a change has been posted, you agree to be bound by the revised Terms. We will indicate the date of the most recent revision at the top of this page.",
  },

  { type: "h2", text: "12. Contact us" },
  {
    type: "p",
    text: "If you have any questions about these Terms, please contact us at [hello@bainsquared.com](mailto:hello@bainsquared.com) or by post at:",
  },
  { type: "address", lines: ["Bain Squared Pte. Ltd.", "7 Temasek Boulevard", "Suntec Tower One", "Singapore 038987"] },
];
