import { getUserAccounts } from '@/actions/dashboard'
import { defaultCategories } from '@/data/categories';
import React from 'react'
import AddTransactionForm from '../_components/AddTransactionForm';
import { getTransaction } from '@/actions/transaction';

const AddTransactionPage = async({searchParams}) => {
  const accounts = await getUserAccounts();
  const params = await searchParams;
  const editId = params?.edit;
  // console.log(editId);
  let initialData = null;
  if(editId){
    const transaction  = await getTransaction(editId);
    initialData = transaction;
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
  )
}


export default AddTransactionPage