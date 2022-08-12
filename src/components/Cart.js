import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { item, totalItem, totalPrecio, removeItem, clear, sendOrder } =
    useContext(CartContext);

  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

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
            className="h-100"
            style={{ backgroundColor: "#eee", height: "100vh !important" }}
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
                              Continuar comprando
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
                                      <h5 className="mb-0">
                                        ${el.precio * el.cantidad}
                                      </h5>
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
                                  src="https://firebasestorage.googleapis.com/v0/b/tecnoshop-c8260.appspot.com/o/AVATAR-TECNOsHOP.jpg?alt=media&token=cfb8ab51-09ed-4605-977f-860275f527aa"
                                  className="img-fluid rounded-3"
                                  style={{ width: 45 + "px" }}
                                  alt="Avatar"
                                />
                              </div>

                              <form className="mt-4">
                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    
                                    placeholder="Nombre"
                                    value={buyerName}
                                    onChange={(ev) =>
                                      setBuyerName(ev.target.value)
                                    }
                                  />
                                </div>

                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="tel"
                                    className="form-control form-control-lg"
                                    
                                    placeholder="Télefono"
                                    value={buyerPhone}
                                    onChange={(ev) =>
                                      setBuyerPhone(ev.target.value)
                                    }
                                  />
                                </div>

                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="email"
                                    className="form-control form-control-lg"
                                  
                                    placeholder="Email -> xxxxx@xxxxx"
                                    value={buyerEmail}
                                    onChange={(ev) =>
                                      setBuyerEmail(ev.target.value)
                                    }
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
                                onClick={() =>
                                  sendOrder(buyerName, buyerPhone, buyerEmail)
                                }
                              >
                                <div className="d-flex justify-content-between">
                                  <span>${totalPrecio}</span>
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
        </>
      )}
    </>
  );
}

export { Cart };
