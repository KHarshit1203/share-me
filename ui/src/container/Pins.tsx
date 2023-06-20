import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { User } from 'src/utils/sanity/interfaces/User';
import Navbar from 'src/components/Navbar';
import Feed from 'src/components/Feed';
import PinDetails from 'src/components/PinDetails';
import CreatePin from 'src/components/CreatePin';
import Search from 'src/components/Search';

interface Props {
  user: User;
}

const Pins: React.ElementType<Props> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          user={user}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetails user={user} />}
          />
          <Route path="/create-pin" element={<CreatePin user={user} />} />
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
