
const UserCard = ({ user, deleteUser, setInfoUpdate, setIsOpenForm }) => {
  const handleDelete = () => {
    deleteUser('/usuarios', user.id)
  }
  const handleEdit = () => {
    setInfoUpdate(user)
    setIsOpenForm('')
  }
  return (
    <article className="userCard">

      <ul className="userCard__list">
        <li className="userCard__item"><span className="userCard__label">Usuario: </span><span className="userCard__value">{user.usuario}</span></li>
        <li className="userCard__item"><span className="userCard__label">Nombre: </span><span className="userCard__value"> {user.primerNombre} {user.segundoNombre}</span></li>
        <li className="userCard__item"><span className="userCard__label">Apellidos: </span><span className="userCard__value">{user.primerApellido} {user.segundoApellido}</span></li>
        <li className="userCard__item"><span className="userCard__label">Departamentos: </span><span className="userCard__value">{user.departamentoId}</span></li>
        <li className="userCard__item"><span className="userCard__label">Cargo: </span><span className="userCard__value">{user.cargoId}</span></li>
        <li className="userCard__item"><span className="userCard__label">Email: </span><span className="userCard__value">{user.primerNombre}@hotmail.com</span></li>
      </ul>
      <div className="userCard__btns_container">
        <button onClick={handleDelete} className="userCard__btn--delete"><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit} className="userCard__btn--update"><i className='bx bx-pencil'></i></button>
      </div>
    </article>
  )
}

export default UserCard