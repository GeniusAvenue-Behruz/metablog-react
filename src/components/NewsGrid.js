import React, { useState, useEffect } from 'react';

function NewsGrid() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch('news.json')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.error('Error loading the news data:', error));
  }, []);

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
        {newsItems.map(item => (
          <article key={item.id} className="p-6 border border-gray-200 rounded-lg">
            <img src={item.imageUrl} alt='hmm' className="mb-4 w-full" />
            <span className="inline-block bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-sm font-semibold mb-4">{item.category}</span>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <div className="flex items-center gap-2">
              <img src={item.authorImage} alt={`m of ${item.authorName}`} className="h-9 w-9 rounded-full" />
              <span className="text-gray-600 text-sm">{item.authorName}</span>
              <span className="text-gray-500 text-xs">{item.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default NewsGrid;
