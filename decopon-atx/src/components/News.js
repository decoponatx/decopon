import React from 'react';
import { Container, Row} from 'react-bootstrap';
import newsData from './json/news.json'; // Adjust the path as needed

const NewsItem = ({ title, description, date }) => (
  <Row className='eventDetails'>
    <div>
      <h2 className='eventDate'>{title}</h2>
      <p style={{padding:5}} dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </Row>
);

function News() {
  // Slice the newsData array to get only the latest three posts
  const latestNews = newsData.slice(0, 3);

  return (
    <Container>
      <Row className='component'>
        <div className='title'>
          <h1 className='subtitle'>News and Updates</h1>
        </div>
        <div className='content'>
          {latestNews.map((item, index) => (
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
