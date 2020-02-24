import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      Helo from RoomsContainer
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms}></RoomsList>
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading></Loading>;
//         }
//         return (
//           <div>
//             Helo from RoomsContainer
//             <RoomsFilter rooms={rooms}></RoomsFilter>
//             <RoomsList rooms={sortedRooms}></RoomsList>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// <RoomConsumer></RoomConsumer> to access context in function based component
// value in function is the value from context