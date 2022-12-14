import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
   const initialState = [
      { id: 0, value: 0, name: 'Ненужная вещь' },
      { id: 1, value: 4, name: 'Ложка' },
      { id: 2, value: 2, name: 'Вилка' },
      { id: 3, value: 1, name: 'Тарелка' },
      { id: 4, value: 3, name: 'Набор минималиста' }
   ];

   const [counters, setCounters] = useState(initialState);

   const handleDelete = (id) => {
      const newCounters = counters.filter(counter => counter.id !== id);
      setCounters(newCounters);
   };

   const handleReset = () => {
      setCounters(initialState);
   };

   const handleUpdate = () => {
      const updatedState = [
         { id: 0, value: 5, name: 'Ненужная вещь' },
         { id: 1, value: 1, name: 'Ложка' },
         { id: 2, value: 7, name: 'Вилка' },
         { id: 3, value: 3, name: 'Тарелка' },
         { id: 4, value: 6, name: 'Набор минималиста' }
      ];

      setCounters(updatedState);
   };

   return (
      <>
         {counters.map((count) => (
            <Counter key={count.id} onDelete={handleDelete} {...count} />
         ))}
         <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>Сброс</button>
         <button className='btn btn-primary btn-sm m-2' onClick={handleUpdate}>Обновить состояние</button>
      </>
   );
};

export default CountersList;
