// Import from react
import React from 'react';

// Import JS components
import Navigationbar from "../../components/Navigation/Navigationbar.js";
import CardsPurple from "../../components/Cards/Purple/CardsPurple.js";
import CardsGrey from "../../components/Cards/Grey/CardsGrey.js";

// Import from Bootstrap
import Container from 'react-bootstrap/esm/Container.js';
import Stack from "react-bootstrap/Stack";

// Import from css files
import "./AboutUs.css";

/* The landing page */

const AboutUs = () => {
  return (
    <div>
      {/* Renders the global navbar at the top of the page */}
      <Navigationbar />
      <Container>
        {/* Stacks the card underneath each other */}
        <Stack gap={5}>
          <div style={{ height: "50px" }} />
          <CardsPurple
            cardImg={null}
            cardTitle="Our Unabashed Truth"
            cardText1={<p>
              <br />
              We're here for the moments you whisper, "I probably don't need this,
              but..." and then add it to the cart anyway.
              <br />
              <br />
              <b>Let's be real:</b> Most of the truly great things in life are impulsive
              decisions. Like that time you decided to get bangs, it really did
              not soot you. Or adopt that third cat - wait, wasn't it the
              thirtieth? Or buy <i>another</i> novelty mug.
              <br />
              <br />
              <b>Our mission?</b> To provide you with an expertly curated collection of
              items you never knew you needed, but suddenly can't live without.
              We've done all the hard work of finding all the shiny, delightful,
              and occasionally absurd thins so you don't have to.
              <br />
              <br />
              Think of us as your digital enablers, your online best friend
              whispering, "Go on, you deserve it!" every time you browse. We're
              not here to judge your card; we're here to celebrate it.
            </p>}
            cardButton={null} />
          <CardsGrey
            cardImg={null}
            cardTitle="Behind the Curtains at Impulse Buy Kingdom"
            cardText1={<p>
              <br />
              Our "product research" often involves late-night scrolls,
              questionable ad clicks, and more than a fer "Is this genius or
              truly ridiculous?" debates.
              <br />
              <br />
              We are fueled by strong coffee, even stronger wifi, and the
              occasional existential crisis about why we <i>really</i> needed
              that sparkly disco ball (<b>Spoiler:</b> we still don't know, but
              it brings us joy).
              <br />
              <br />
              <b>The Impulse Buy Kingdom warehouse?</b> Let's just say it's a
              carefully organized chaos. We know where everything is...
              eventually. Especially that limited-edition llama-shaped hand
              sanitizer.
              <br />
              <br />
              <b>Our Customer service team?</b> Tey're basically professional
              therapists for your shopping urges. They've seen it all, from
              accidental duplicate orders to midnight confessions of "I bought
              this for my pet ferret, is that weird?" (Our answer: "Never!")
              <br />
              <b>Every single item you see on our site has passed the ultimate
              test:</b> The "Would we impulsively buy this at 2 AM?" test. If
              the answer is "YES, and also for a friend!" it makes the cut.
            </p>} />
          <CardsPurple
            cardImg={null}
            cardTitle="The Impulse Buy Philosophy (for You!)"
            cardText1={<p>
              <br />
              <b>So, why <i>do</i> we do it? Why do we buy things on
              impulse?</b> Because sometimes, life needs a little unscripted
              joy. A unexpected package arriving at your door, filled with
              something wonderfully random, is a tiny burst of happiness in a
              world that often demands we be sensible."
              <br />
              <br />
              We believe your home should reflect your unique, glorious
              eccentricities. Your desk should have that bobble-head. Your
              kitchen needs that ridiculously specific gadget. And your life
              deserves that momentary thrill of clicking "Add to Cart" on
              something utterly delightful.
              <br />
              Think of an "Impulsive Buy" not as a splurge, but as a
              mini-adventure A commitment to fun. A tiny, tangible reminder that
              life is too short for boring shopping lists..
            </p>}
            cardButton={null} />
          <CardsGrey
            cardImg={null}
            cardTitle="Your Invitation to The Kingdom"
            cardText1={<p>
              <br />
              Ready to embrace the delightful chaos? Dive into the Impulse Buy
              Kingdom. Just don't say we didn't warn you about the sheer volume
              of things you're about to suddenly need.
              <br />
              <br />
              Go on, you know you want to. Your future self (the one with the
              new, amazing thing) will thank you.
            </p>}
            cardButton={null} />
          <p style={{ color: "red" }}>
            <small><b>Warning: </b>Browsing our store may lead to unexpected
            joy, delightful surprises, and a slight<br /> increase in your credit
            card statement. But hey, happiness is priceless right?</small>
          </p>
          <div style={{ height: "5px" }} />
        </Stack>
      </Container>
    </div>
  )
}

export default AboutUs
