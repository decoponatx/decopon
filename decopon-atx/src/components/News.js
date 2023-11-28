import React from 'react';
import { Row } from 'react-bootstrap';

const NewsItem = ({ title, description, date }) => (
  <Row className='webEventDetails'>
    <div>
      <h2 className='eventDate'>{date}</h2>
      <p className='eventName'>
        <strong>{title}</strong>
      </p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </Row>
);

function News() {
  const newsData = [
    {
      title: 'Shop is now OPEN!',
      description:
        'Exciting news – our online store is now open, right on time for your holiday shopping spree! Check it out <a href="https://shop.decoponatx.com/" target="_blank">here</a>. <br></br>Planning to surprise your loved ones? Make sure to place your orders by December 15th for economy shipping, or by December 20th if you are opting for expedited shipping. Plus, all orders are prepped and primed for gifting – making your holiday surprises even more special! ',
      date: 'November 27, 2023',
    },
    {
        title: 'Come visit us!',
        description: 
        'As December nears, so does the excitement of our holiday market events! Get ready to join us at the Bee Cave Hill Country Galleria. We will be located in the main plaza near the skating rink. <br></br>For those who want to decoden at the market, we are offering discounted rates on select items. Plus, a little reminder: sign up for our newsletter by December 2 to snag a 20% off discount for your market purchases!',
        date: 'November 25, 2023'

    },
  ];

  return (
    <div className='component'>
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
    </div>
  );
}

export default News;