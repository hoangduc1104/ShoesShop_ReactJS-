import React, { useState } from 'react';
import { STYLES } from '../../constant';
import { Rating, Typography } from '@mui/material';
import { useEffect } from 'react';
import UserService from '../../service/user';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const UserItem = ({ className, data }) => {
  const [user, setUser] = useState(null);
  const [timestamp, setTimestamp] = useState();
  const getUser = async () => {
    const repo = await UserService.getUserById(data?.owner);
    setUser(repo);
  };
  useEffect(() => {
    getUser();
    const dateObject = new Date(data?.updatedAt);
    setTimestamp(dateObject.getTime());
  }, []);
  return (
    <>
      <div
        // onClick={() => setOpenMenu(!openMenu)}
        className={`account flex ml-5 text-sm my-auto cursor-pointer hover:text-${STYLES.color.primary} ${className}`}
      >
        {user && (
          <img
            src={`${process.env.REACT_APP_BASE_URL}${'/user/profile-image/'}${
              user?.image
            }`}
            alt=""
            className="w-9 h-9 rounded-full my-auto"
          />
        )}
        <div className="ml-2 relative">
          <span data-dropdown-toggle="dropdown" id="dropdownDefaultButton">
            {user?.username}
          </span>
          <div className="text-lg">
            <Rating name="read-only" value={data.rate} readOnly size="small" />
          </div>
          <div
            className={`absolute flex w-max text-xs ${STYLES.text.text_secondary} -bottom-4`}
          >
            {/* <p>{data?.updatedAt} </p> */}
            {timestamp && (
              <span className="post-date">
                {<ReactTimeAgo date={timestamp} locale="en-US" />}
              </span>
            )}
            <p className="ml-2"> | Pân loại:Trắng,39</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
