import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { item, totalItem, totalPrecio, removeItem, clear } =
    useContext(CartContext);

  const CartContextValue = useContext(CartContext);

  return (
    <>
      {item.length <= 0 ? (
        <div className="alert alert-danger" role="alert">
          Todavia no hay elementos en el carrito, por favor, primero agregue un
          producto
          <Link to="/" className="btn btn-outline-primary btn-sm m-2">
            Ver Listado de productos
          </Link>
        </div>
      ) : (
        <>
          <section
            className="h-100 h-custom"
            style={{ backgroundColor: "#eee" }}
          >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-lg-7">
                          <h5 className="mb-3">
                            <Link to="/" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Continue comprando
                            </Link>
                          </h5>
                          <hr />

                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                              <p className="mb-1">Shopping cart</p>
                              <p className="mb-0">
                                Tienes {totalItem} productos en tu carrito
                              </p>
                            </div>

                            <div>
                              <p className="mb-0">
                                <span className="text-muted">Sort by:</span>{" "}
                                <a href="#!" className="text-body">
                                  price{" "}
                                  <i className="fas fa-angle-down mt-1"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          {item.map((el) => (
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={el.imagen}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: 65 + "px" }}
                                      />
                                    </div>
                                    <div className="ms-3">
                                      <h5>{el.producto}</h5>
                                      <p className="small mb-0">
                                        {el.categoria}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: 50 + "px" }}>
                                      <h5 className="fw-normal mb-0">
                                        {el.cantidad}
                                      </h5>
                                    </div>
                                    
                                    <div style={{ width: 80 + "px" }}>
                                      <h5 className="mb-0">${el.precio * el.cantidad}</h5>
                                    </div>
                                    <button
                                      onClick={() => removeItem(el.id)}
                                      type="button"
                                      className="btn btn-xl"
                                    >
                                      <i
                                        className="fa-solid fa-trash-can fa-lg"
                                        style={{ color: "red" }}
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="col-lg-5">
                          <div className="card bg-primary text-white rounded-3">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="mb-0">Datos del comprador</h5>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                  className="img-fluid rounded-3"
                                  style={{ width: 45 + "px" }}
                                  alt="Avatar"
                                />
                              </div>

                              <form className="mt-4">
                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="text"
                                    id="typeName"
                                    className="form-control form-control-lg"
                                    siez="17"
                                    placeholder="Nombre"
                                  />
                                </div>

                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="text"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    siez="17"
                                    placeholder="Télefono"
                                    minLength="19"
                                    maxLength="19"
                                  />
                                </div>

                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="text"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    siez="17"
                                    placeholder="Email -> xxxxx@xxxxx"
                                    minLength="19"
                                    maxLength="19"
                                  />
                                </div>
                              </form>

                              <hr className="my-4" />

                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Subtotal</p>
                                <p className="mb-2">${totalPrecio}</p>
                              </div>

                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Envío</p>
                                <p className="mb-2">Free</p>
                              </div>

                              <div className="d-flex justify-content-between mb-4">
                                <p className="mb-2">Total - Incl. taxes</p>
                                <p className="mb-2">${totalPrecio}</p>
                              </div>

                              <button
                                type="button"
                                className="mx-2 btn btn-info btn-block btn-lg"
                                onClick={() => CartContextValue.sendOrder()}
                              >
                                <div className="d-flex justify-content-between">
                                  <span>$4818.00</span>
                                  <span>
                                    {" "} Generar Orden
                                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                  </span>
                                </div>
                              </button>
                          
                              <button
                                onClick={clear}
                                type="button"
                                className="mx-2 btn btn-danger btn-block btn-lg"
                              >
                                Vaciar Carrito
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="alert alert-primary" role="alert">
              Total ${totalPrecio}
              <button
                onClick={clear}
                type="button"
                className="btn btn-danger btn-sm m-2"
              >
                Vaciar Carrito
              </button>
              <button
                onClick={() => CartContextValue.sendOrder()}
                type="button"
                className="btn btn-danger btn-sm m-2"
              >
                Generar Orden
              </button>
            </div>
            <div className="alert alert-primary" role="alert">
              La cantidad de items total en el carito es {totalItem}
            </div>
          </div>
          <div className="container">
            <ul className="list-group">
              {item.map((el) => (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  cantidad: {el.cantidad} | {el.producto} / {el.id}
                  <span className="badge-primary badge-pill"></span>
                  <button
                    onClick={() => removeItem(el.id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export { Cart };
