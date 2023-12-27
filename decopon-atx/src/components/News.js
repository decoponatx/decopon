import React from 'react';
import { Container, Row } from 'react-bootstrap';

const NewsItem = ({ title, description, date }) => (
  <Row className='eventDetails'>
    <div>
      <h2 className='eventDate'>{date}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </Row>
);

function News() {

  const newsData = [
    {
      description:
        'Thanks to everyone who came out to every single event this past December. We appreciate you! <br></br>Keep checking back for our upcoming future events. We have also updated our store with new stock and charms! Be sure to check it out <a href="https://shop.decoponatx.com/" target="_blank">here</a>.<br></br>Hope you have a happy new year! We will see you in 2024.',
      date: 'December 27, 2023',
    },
    {
      title: 'Have an Event or Party?',
      description:
        "Do you have an event or party coming up and want to do something different? Check out our party package details <a href='https://www.decoponatx.com/parties' target='_blank'>here</a>! Don't forget to visit us at our booth at the Hill Country Holiday Market this weekend. We are located on the lawn right by the League.",
      date: 'December 8, 2023',
    },
    {
      title: 'Shop is now OPEN!',
      description:
        'Exciting news – our online store is now open, right on time for your holiday shopping spree! Check it out <a href="https://shop.decoponatx.com/" target="_blank">here</a>. <br></br>Planning to surprise your loved ones? Make sure to place your orders by December 15th for economy shipping, or by December 20th if you are opting for expedited shipping. Plus, all orders are prepped and primed for gifting – making your holiday surprises even more special! ',
      date: 'November 27, 2023',
    },
  ];

  return (
    <Container>
      <Row className='component'>
        <div className='title'>
          <h1 className='subtitle'>News and Updates</h1>
        </div>
        <div className='content'>
          {newsData.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default News;
