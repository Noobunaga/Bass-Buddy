import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './infoPage.css';

function LuresLibrary() {
  const dispatch = useDispatch();
  //const history = useHistory();
  const lures = useSelector(store => store.luresReducer);
  const user = useSelector(store => store.user);

  //FOR ADDING NEW LURE
  useEffect(() => {
    console.log('We are getting lures');
    dispatch({type: 'GET_LURES'});
  }, []);

  // const lureDetails = (lure) => {
  //   console.log('Lure details', lure);
  //   dispatch({type: 'LURE_DETAILS', payload: lure})
  //   history.push('/details')
  // }
  console.log('looking for', lures);

  return (
    <div className="box full">
      <h2>Library</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lures</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lures.luresReducer.map((lure, index) => {
            return ( <tr key={index}>
              <td>{lure.name} </td>
              <td><img src={lure.image} width="150"/></td> 
              <td>{lure.user_id}</td>
              {
                ( user.id === lure.user_id) ?
                <td><button onClick={() => dispatch({ type: 'DELETE_LURE', payload: lure.id})}>Delete</button></td> :
                <td><button disabled>Delete</button></td>
              }
            </tr>
              )
          })}
        </tbody>

        


      </table>
    </div>
  );
}
//   )
// }

 export default LuresLibrary;

// function ShelfPage() {
//   const dispatch = useDispatch();
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');
//   const itemReducer = useSelector(store => store.itemListReducer);
//   const user = useSelector(store => store.user);

//   useEffect(() => {
//     dispatch({ type: 'GET_ITEMS' });
// }, []);

  

//   const submitItem = () => {
//     const itemToSend = {
//       description: description,
//       image_url: image,
//     };
//     console.log(itemToSend);
//     if (itemToSend.description == '') {
//       alert('Please enter an item description');
//       return false;
//     }
//     if (itemToSend.image_url == '') {
//       alert('Please enter an item image URL');
//       return false;
//     }
//     dispatch({
//       type: 'ADD_ITEM',
//       payload: itemToSend
//     });
//     setDescription('');
//     setImage('');
//   };
  
//   return (
//     <div className="container">
//       <h2>Shelf</h2>
//       <div name="submitForm">
//       <label>
//         Item Description:
//         <input type="text" name="descriptionInput" value={description} onChange={(event) => setDescription(event.target.value)}/>
//       </label>
//       <br />
//       <label>
//         Item Image URL:
//         <input type="text" name="imageInput" value={image} onChange={(event) => setImage(event.target.value)}/>
//       </label>
//       <br />
//      <button onClick={submitItem}>Submit Item</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>Description</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {itemReducer.map((item, index) => {
//             return ( <tr key={index}>
//               <td><img src={item.image_url} /></td>
//               <td>{item.description}</td>
//               {
//                 ( user.id === item.user_id) ?
//                 <td><button onClick={() => dispatch({ type: 'DELETE_YOUR_ITEM', payload: item.id})}>Delete</button></td> :
//                 <td><button disabled>Delete</button></td>
//               }
//               {/* if( user.id === item.user_id) {
//                 <td><button onClick={dispatch({ type: 'DELETE_YOUR_ITEM', payload: item.id})}></button></td>
//                 } */}
//             </tr>
//               )
//           })}
//         </tbody>

        


//       </table>
//       <p>All of the available items can be seen here.</p>
//     </div>
//   );
// }

// export default ShelfPage;
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>Info Page</p>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


// class InfoPage extends React.Component {

//   render() {
//     return (
//       <div>
//         <h1>Lure Library</h1>
//       </div>
//     )
//   }
// }

            //MOVIES MAPPING
            // <div key={lure.id}>
            //   <h3>{lure.name}</h3>
            //   <img src={lure.image} alt={lure.name} onClick={() => lureDetails(lure.id)}/>
            // </div>