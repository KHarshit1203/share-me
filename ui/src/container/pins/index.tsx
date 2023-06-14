import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { User } from 'src/utils/interfaces/User';

interface Props {
  user: User;
}

const Pins: React.ElementType<Props> = ({ user }) => {
  return <div>Pins</div>;
};

export default Pins;
