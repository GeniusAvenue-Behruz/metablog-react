import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">
        <div className="space-y-2">
          <p className="font-bold">About</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium cupiditate veniam doloribus quisquam non iusto aspernatur repudiandae reiciendis magnam!</p>
          <p>Email: u030217@bmu-edu.uz</p>
          <p>Phone: +998 93 604 94 73</p>
        </div>
        <div>
          <p className="font-bold mb-2">Quick Link</p>
          <ul className="list-none">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">Category</p>
          <ul className="list-none">
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
