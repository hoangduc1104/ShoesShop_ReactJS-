import React, { useEffect, useState } from 'react';
import CommentService from '../../service/comment';
import io from 'socket.io-client';
import { getToken } from '../../helper/auth';

const Test = () => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3002');

    socket.on('newComment', (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
      console.log(comment);
    });

    loadComments();

    return () => {
      // Ngừng lắng nghe khi component bị hủy
      socket.off('newComment');
    };
  }, []);

  console.log(comments);
  const loadComments = async () => {
    const response = await CommentService.getAllCommentByProduct(
      '64322cd00fd421fb53a79695'
    );
    setComments(response);
  };

  const handleFormSubmit = async (event) => {
    const params = {
      product_id: '64322cd00fd421fb53a79695',
      user_id: '642a2753909009ebfb88cee6',
    };
    const data = { rate: 4, status: content, image: 'abbbbbbbbc' };
    event.preventDefault();
    await CommentService.postComment(params, data, getToken());
    setContent('');
  };
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments?.map((comment, idx) => (
          <li key={idx}>{comment.status}</li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
