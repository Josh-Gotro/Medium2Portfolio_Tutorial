import React from 'react';
import BlogTile from './BlogTile';

const BlogContainer = () => {
    return (
        <div>
            this component will hold all my blogs
            <BlogTile/>
            <BlogTile />
            <BlogTile />
        </div>
    );
}

export default BlogContainer;
