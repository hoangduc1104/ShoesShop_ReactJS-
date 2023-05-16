import React from 'react';
import COMMENT_API from '../../api/comment';

const CommentService = {
  getAllCommentByProduct: (priductId) =>
    COMMENT_API.getAllCommentByProduct(priductId),
  postComment: (params, data, token) =>
    COMMENT_API.postComment(params, data, token),
};

export default CommentService;
