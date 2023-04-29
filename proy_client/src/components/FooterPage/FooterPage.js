import React from 'react'
import { Col, Row } from 'antd'
import "./FooterPage.scss"

export const FooterPage = () => {
  return (
    <footer className="footer">
        <div className='container'>
            <Row gutter={[20,20]}>
                <Col xs={24} sm={12} md={8}>
                    <h4>Informacion de contacto</h4>
                    <p>Universidad-Empresa</p>
                    <p>Manizales</p>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <h4>Enloaces utiles</h4>
                    <ul className='list-unstyled'>
                        <li>
                            {" "}
                            <a href="#">Politica de privacidad</a>{" "}
                        </li>
                        <li>
                            <a href="#">Terminos y condiciones</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <h4>Suscribete a nuestro boletin</h4>
                    <form>
                        <div className='form-group'>
                            <input type='email' className='form-control' placeholder='Ingresa tu email'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Sucribirme</button>
                    </form>
                </Col>
            </Row>
        </div>
        <div className='footer-bottom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p className='text-center'>
                            {new Date().getFullYear()} SENNOVALAB. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

