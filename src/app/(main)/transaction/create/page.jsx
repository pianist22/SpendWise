// import { getUserAccounts } from '@/actions/dashboard'
// import { defaultCategories } from '@/data/categories';
// import React, { Suspense } from 'react'
// import AddTransactionForm from '../_components/AddTransactionForm';
// import { getTransaction } from '@/actions/transaction';
// import Loader from '@/components/Loader';

// const AddTransactionPage = async({searchParams}) => {
//   const accounts = await getUserAccounts();
//   const params = await searchParams;
//   const editId = params?.edit;
//   // console.log(editId);
//   let initialData = null;
//   if(editId){
//     const transaction  = await getTransaction(editId);
//     initialData = transaction;
//   }

//   return (
//   <div className="max-w-3xl mx-auto px-5">
//     <Suspense fallback={<Loader/>}>
//       <div className="flex justify-center md:justify-normal mb-8">
//         <h1 className="text-5xl gradient-title ">{
//           editId? "Edit Transaction" : "Add Transaction"
//         }</h1>
//       </div>
//       <AddTransactionForm
//         accounts={accounts}
//         categories={defaultCategories}
//         editMode={!!editId}
//         initialData={initialData}
//         />
//     </Suspense>
//     </div>
//   )
// }


// export default AddTransactionPage
'use client'

import React, { useEffect, useState } from 'react';
import AddTransactionForm from '../_components/AddTransactionForm';
import Loader from '@/components/Loader';
import { getUserAccounts } from '@/actions/dashboard';
import { getTransaction } from '@/actions/transaction';
import { defaultCategories } from '@/data/categories';

const AddTransactionPage = ({ params }) => {
  const editId = params?.edit;

  const [accounts, setAccounts] = useState(null);
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const fetchedAccounts = await getUserAccounts();

      let fetchedTransaction = null;
      if (editId) {
        fetchedTransaction = await getTransaction(editId);
      }

      setAccounts(fetchedAccounts);
      setInitialData(fetchedTransaction);
      setLoading(false);
    }

    fetchData();
  }, [editId]);

  if (loading || !accounts) {
    return <Loader />;
  }

  return (
  <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">{
          editId? "Edit Transaction" : "Add Transaction"
        }</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
        />
    </div>
  );
};

export default AddTransactionPage;
