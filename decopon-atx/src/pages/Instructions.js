import React from 'react';
import SocialMediaHandles from '../components/social/Handles'


const Instructions = () => {
  const tiktokHandle = 'decoponatx';
  const instagramHandle = 'decoponatx';

  return (
    <div className='component'>
      <div className='title'>
        <h1 className='subtitle'>Instructions and Tips</h1>
      </div>
      <div className='content'>
        <p style={{ padding: 10 }}>If you're new to decoden, here's a little guide to sprinkle some magic on your first adventure!</p>
        <div id='iStep1'>
          <div className='subComponent'>Step 1 - Safety First!</div>
          <p className='content'>
            While everything might look irresistibly scrumptious, remember it's all for your eyes only, not for tasting! Our faux cream is crafted from air dry clay and glue, and those cute charms are made of resin and/or clay. They're definitely not snackable! We also suggest that artists under 8 have an adult to share in the fun and keep things safe.
            <br></br><br></br>
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <strong>Product Use Warning</strong>
            <br></br>
            This product is for external use only. Do not ingest or consume. Ingestion may cause serious harm.
          </p>
        </div>
        <div id='iStep2'>
          <div className='subComponent'>Step 2 - Set up Your Space</div>
          <p className='content'>
            Before diving into your decoden adventure, it's important to set up a comfortable crafting space. A flat surface works best for creating your masterpiece. Don't worry, the cream cleans up easily, but if you're worried about your workspace, consider laying down a placemat for extra protection.
            <br></br><br></br>
            Finally, take a moment to peek into your kit. Make sure you have your decoden item, cream, additional tips, charms, and a postcard. Each cream bag is ready to go with a piping tip already attached, so you're all set to start your creative journey!
          </p>
        </div>
        <div id='iStep3'>
          <div className='subComponent'>Step 3 - Prep the Cream</div>
          <p className='content'>
            Your piping cream comes in a double-bagged setup for extra security. First, carefully remove the cream from the outer bag and put the twist-tie aside. No spills here, as the inner bag is securely sealed. Then, detach the tip and give the bag a gentle stretch to uncompress it. This is your cue to give the cream a good massage, blending it thoroughly.
            <br></br><br></br>
            After the cream feels evenly mixed, press it down toward the tip of the bag. Aim to leave a space about three-quarters the length of the piping tip empty. Snip off this extra bit from the inner bag and pop the tip back on.
            <br></br><br></br>
            Now, take the outer bag and trim its tip to half the length of the piping tip. Slide the inner bag with the cream into the outer bag. Start squeezing from the top down, until you see the frosting peeking out of the tip, ready for your creative touch!
          </p>
        </div>
        <div id='iStep4'>
          <div className='subComponent'>Step 4 - Begin Decoden!</div>
          <p className='content'>
            Practice makes perfect. Use the back of the postcard provided as your practice canvas. Here, you can try out a few test applications to master the right amount of pressure needed for that flawless frosting flow. Remember, the key is to grip the top of the piping bag and gently squeeze downwards.
            <br></br><br></br>
            Once you feel confident with how the frosting behaves, you're all set to start adorning your item! There's no incorrect way to do this – let your creativity soar. The frosting also acts as an adhesive, so simply place your charms on the frosting to affix them beautifully to your decoden piece.
            <br></br><br></br>
            Before you begin decoden on mirrors and phone cases, be sure to peel off any protective films.
          </p>
        </div>
        <div id='iStep5'>
          <div className='subComponent'>Step 5 - Let it Cure</div>
          <p className='content'>
            Finished your creation? Great! The drying time depends on for your frosting thickness – it usually requires around a day or more to fully cure. Place your newly crafted masterpiece in a low-traffic area and let it sit undisturbed overnight. To test if it's ready, gently press a charm. If it shifts, it needs more time to set. If it stays put, your decoden item is all set and ready to show off!
          </p>
        </div>
        <div id='tips'>
          <div className='subComponent'>Tips</div>
          <p className='content'>
            <ul>
              <li><strong>Plan your design:</strong> Before you start, have a clear idea of your design. Sketch it out or lay your charms on your item to see how they fit. This helps in avoiding mistakes and ensures a cohesive look.</li>
              <li><strong>Start simple:</strong> Need some inspiration? A great way to begin is by keeping it simple. Try starting with a basic border around your item and play around with the placement of charms. As you progress with your project, you'll find that more creative ideas naturally flow.</li>
              <li><strong>Decorate anything:</strong> When you've completed your first project, you might find yourself with some extra cream or charms. Look around your home for objects that could be enhanced with a bit of decoden – the possibilities are endless!</li>
              <li><strong>Store the extras: </strong>If you want to save the cream for later, start by removing the outer bag and cleaning off any leftover cream. Gently remove the tip and set it aside to dry. In a few days, use a toothpick to clear out any dried cream from the tip. To store your extra charms, ensure they are kept in a secure location. The packaging included is perfect for this purpose. For storing the cream bag, place it back into the outer bag and then seal it in a ziplock bag. Store it away from heat, and you'll be able to reuse it later - just follow the instructions from step 3.</li>
            </ul>
          </p>
        </div>
        <div id='contact'>
          <div className='subComponent'>Need Help?</div>
          <p className='content'>
            Should you require any assistance, don't hesitate to contact us – we're here to help!
            <br></br><br></br>
            Reach out to us through your preferred method and we'll ensure someone responds to you within 24 hours.
            <SocialMediaHandles
              tiktokHandle={tiktokHandle}
              instagramHandle={instagramHandle}></SocialMediaHandles>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
