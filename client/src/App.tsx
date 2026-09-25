import { useEffect, useLayoutEffect } from "react";
import { Switch, Route, Router, Redirect, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WhatWeDo from "@/pages/WhatWeDo";
import WhoWeWorkWith from "@/pages/WhoWeWorkWith";
import Careers from "@/pages/Careers";
import CareersForm from "@/pages/CareersForm";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import FeaturedTopic from "@/pages/FeaturedTopic";
import Publication from "@/pages/Publication";
import AllInsightsList from "@/pages/AllInsightsList";
import CapabilityAI from "@/pages/CapabilityAI";
import CapabilityFinance from "@/pages/CapabilityFinance";
import CapabilityValuation from "@/pages/CapabilityValuation";
import Article from "@/pages/Article";
import LegalPage from "@/pages/LegalPage";
import Reviews from "@/pages/Reviews";
import FAQ from "@/pages/FAQ";
import Newsletter from "@/pages/Newsletter";
import { PRIVACY_BLOCKS, TERMS_BLOCKS } from "@/data/legal";

function AppRouter() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    // A new page starts above the fold even when global CSS enables smooth scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const onSamePageLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      const href = anchor?.getAttribute("href");
      if (href?.startsWith("#/") && href === window.location.hash && anchor?.target !== "_blank") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };
    document.addEventListener("click", onSamePageLink);
    return () => {
      window.history.scrollRestoration = previous;
      document.removeEventListener("click", onSamePageLink);
    };
  }, []);

  return (
    // Reset page-local tabs and menus when moving between routes using the same template.
    <Switch key={location}>
      <Route path="/" component={Home} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/who-we-work-with" component={WhoWeWorkWith} />
      <Route path="/careers" component={Careers} />
      <Route path="/careers-form" component={CareersForm} />
      <Route path="/contact" component={Contact} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={FAQ} />
      <Route path="/newsletter" component={Newsletter} />

      {/* Legal */}
      <Route path="/privacy">
        {() => (
          <LegalPage
            title="Privacy Notice"
            lastUpdated="May 17, 2026"
            blocks={PRIVACY_BLOCKS}
          />
        )}
      </Route>
      <Route path="/terms">
        {() => (
          <LegalPage
            title="Terms of use"
            lastUpdated="May 17, 2026"
            blocks={TERMS_BLOCKS}
          />
        )}
      </Route>
      <Route path="/insights" component={Insights} />
      <Route path="/insights/topics/:slug" component={FeaturedTopic} />
      <Route path="/insights/perspectives">
        {() => <Publication params={{ slug: "perspectives" }} />}
      </Route>
      <Route path="/insights/squared-reports">
        {() => <Publication params={{ slug: "squared-reports" }} />}
      </Route>
      <Route path="/insights/looking-glass">
        {() => <Publication params={{ slug: "looking-glass" }} />}
      </Route>
      <Route path="/insights/field-notes">
        {() => <AllInsightsList params={{ slug: "field-notes" }} />}
      </Route>
      <Route path="/insights/client-stories">
        {() => <AllInsightsList params={{ slug: "client-stories" }} />}
      </Route>
      <Route path="/insights/inside-hq">
        {() => <AllInsightsList params={{ slug: "inside-hq" }} />}
      </Route>

      {/* Retain old card URLs while routing to available, accurately labelled content. */}
      <Route path="/insights/agentic-ai-pilots-pay-off">
        <Redirect to="/insights/operators-playbook-agentic-ai" />
      </Route>
      <Route path="/insights/rewiring-fpa">
        <Redirect to="/what-we-do/financial-transformation" />
      </Route>
      <Route path="/insights/intangibles-90-percent">
        <Redirect to="/what-we-do/intangibles-valuation" />
      </Route>
      <Route path="/insights/the-squared-method">
        <Redirect to="/what-we-do" />
      </Route>

      {/* Article detail — catch-all under /insights/*, must come last */}
      <Route path="/insights/:slug" component={Article} />

      {/* Capabilities — AI */}
      <Route path="/what-we-do/agentic-ai-automation">
        {() => <CapabilityAI params={{ slug: "agentic-ai-automation" }} />}
      </Route>
      <Route path="/what-we-do/managed-services">
        {() => <CapabilityAI params={{ slug: "managed-services" }} />}
      </Route>
      <Route path="/what-we-do/llm-optimization">
        {() => <CapabilityAI params={{ slug: "llm-optimization" }} />}
      </Route>

      {/* Capabilities — Finance */}
      <Route path="/what-we-do/fractional-cfo">
        {() => <CapabilityFinance params={{ slug: "fractional-cfo" }} />}
      </Route>
      <Route path="/what-we-do/financial-transformation">
        {() => (
          <CapabilityFinance params={{ slug: "financial-transformation" }} />
        )}
      </Route>

      {/* Capabilities — Valuation */}
      <Route path="/what-we-do/intangibles-valuation">
        {() => (
          <CapabilityValuation
            params={{ slug: "intangibles-valuation" }}
          />
        )}
      </Route>
      <Route path="/what-we-do/esop-valuation">
        {() => (
          <CapabilityValuation params={{ slug: "esop-valuation" }} />
        )}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router hook={useHashLocation}>
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
