import React from 'react';
import 'add-to-calendar-button-react';
import Center from 'react-center';

const EventCalendar = () => {
  return (
    <>
      <div className="component">
        <div className="title">
          <h1 className='subtitle'>Events</h1>
        </div>
        <div className="event">
          <h2 className='eventDate'>Saturday December 2, 2023</h2>
          {/* <p>Find us at our inaugural event at the <a href='https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115' target='_blank'>Bee Cave Holiday Arts Market</a> happening at the Hill Country Galleria. Try your hand at our in-person decoden magic and explore our adorable holiday kits. As a bonus, all in-person decoden will have unlimited access to our charm bar and a special Holiday Market discount for additional kits!</p>
          <br></br> */}
          <p><strong>Location:</strong> <a href='https://maps.app.goo.gl/921KBHHdZF9ejPoq6' target='_blank'>Hill Country Galleria</a></p>
          <p><strong>Time:</strong>  11a - 7p</p>
          <Center>
            <add-to-calendar-button
              name="Visit the Decopon Booth at the Bee Cave Holiday Arts Market"
              startDate="2023-12-02"
              startTime="11:00"
              endTime="19:00"
              timeZone="America/Chicago"
              location="12700 Hill Country Blvd, Bee Cave, TX 78738"
              description="https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115"
              options="'iCal'"
              lightMode="bodyScheme"
              hideCheckmark='true'
              hideBackground='true'
              buttonStyle='round'
              iCalFileName='decopon-event'
            ></add-to-calendar-button>
          </Center>
        </div>
        <div className="event">
          <h2 className='eventDate'>Saturday December 16, 2023</h2>
          {/* <p>We're back again at the <a href='https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115' target='_blank'>Bee Cave Holiday Arts Market</a> happening at the Hill Country Galleria. We will have all of our kits available for in-person decoden. As a bonus, all in-person decoden will have unlimited access to our charm bar and a special Holiday Market discount for additional kits purchased. Our kits will make lovely holiday presents too!</p>
          <br></br> */}
          <p><strong>Location:</strong> <a href='https://maps.app.goo.gl/921KBHHdZF9ejPoq6' target='_blank'>Hill Country Galleria</a></p>
          <p><strong>Time:</strong>  11a - 7p</p>
          <Center>
          <add-to-calendar-button
            name="Visit the Decopon Booth at the Bee Cave Holiday Arts Market"
            startDate="2023-12-16"
            startTime="11:00"
            endTime="19:00"
            timeZone="America/Chicago"
            location="12700 Hill Country Blvd, Bee Cave, TX 78738"
            description="https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115"
            options="'iCal'"
            lightMode="bodyScheme"
            hideCheckmark='true'
            hideBackground='true'
            buttonStyle='round'
            iCalFileName='decopon-event'
          ></add-to-calendar-button>
          </Center>
        </div>
        <div className="event">
          <h2 className='eventDate'>Saturday December 23, 2023</h2>
          {/* <p>Our last event of the year will be at the <a href='https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115' target='_blank'>Bee Cave Holiday Arts Market</a> happening at the Hill Country Galleria. This will be your last chance to grab your last minute holiday gifts! You will also be able to experience in-person decoden with our unlimited charm bar. Hope to see you there!</p>
          <br></br> */}
          <p><strong>Location:</strong> <a href='https://maps.app.goo.gl/921KBHHdZF9ejPoq6' target='_blank'>Hill Country Galleria</a></p>
          <p><strong>Time:</strong>  11a - 7p</p>
          <Center>
          <add-to-calendar-button
            name="Visit the Decopon Booth at the Bee Cave Holiday Arts Market"
            startDate="2023-12-23"
            startTime="11:00"
            endTime="19:00"
            timeZone="America/Chicago"
            location="12700 Hill Country Blvd, Bee Cave, TX 78738"
            description="https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115"
            options="'iCal'"
            lightMode="bodyScheme"
            hideCheckmark='true'
            hideBackground='true'
            buttonStyle='round'
            iCalFileName='decopon-event'
          ></add-to-calendar-button>
          </Center>
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
