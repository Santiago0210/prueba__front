import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const FormUsers = ({ createUser, infoUpdate, updateUser, setInfoUpdate, formTitle, isOpenForm, setIsOpenForm }) => {
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])

  const submit = (data) => {
    if (infoUpdate) {
      updateUser('/usuarios', infoUpdate.id, data)
      setInfoUpdate()
    } else {
      createUser('/usuarios', data)
    }
    reset({
      usuario: "",
      nombre: "",
      apellidos: "",
      departamento: "",
      cargo: ""
    })
    setIsOpenForm('form--close-modal')
  }

  const handleClose = () => {
    setIsOpenForm('form--close-modal')
    setInfoUpdate()
    reset({
      usuario: "",
      nombre: "",
      apellidos: "",
      departamento: "",
      cargo: ""
    })
  }
  return (
    <div className={`formUser ${isOpenForm}`}>
      <div className="form__container">
        <h2 className="form__title">{formTitle}</h2>
        <button onClick={handleClose} className="form__btn--close"><i className='bx bx-x'></i></button>
        <form onSubmit={handleSubmit(submit)} className="form">
          <div className="form__items">
            <label htmlFor="user">Usuario</label>
            <input {...register('user')} type="text" id="user" required/>
          </div>
          <div className="form__items">
          <label htmlFor="name">Nombre</label>
          <input {...register('name')} type="text" id="name" required/>
          </div>
          <div className="form__items">
          <label htmlFor="lastName">Apellidos</label>
          <input {...register('lastName')} type="text" id="lastName" required/>
          </div>
          <div className="form__items">
          <label htmlFor='departament'>Departamento</label>
          <input {...register("departament")} type="text" id="departament" required/>
          </div>
          <div className="form__items">
          <label htmlFor='charge'>Cargo</label>
          <input {...register("charge")} type="text" id="charge"  required />
          </div>
          <div className="form__btn-container">
            <button className="form__btn">{infoUpdate ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormUsers