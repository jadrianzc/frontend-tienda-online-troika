import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './QuienesSomos.css';
import logo from '../../assets/images/logo3.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';
import Footer from '../Footer/Footer';

function QuienesSomos() {
	return (
		<>
			<div className="ContQuinesSomos">
				<Card className="CardQuienesSomos">
					<CardContent>
						<Typography className="TitleQuienes" variant="h1">
							Grupo Troika
						</Typography>
						<div className="logoQuienes">
							<img src={logo} alt="" />
						</div>
						<Grid container spacing={24} className="GridQuienes">
							<Grid item xs={12} sm={12} md={7} className="QuienesBanner1">
								<img src={banner2} alt="" />
							</Grid>
							<Grid item xs={12} sm={12} md={5} className="txtQuienes">
								<Typography>
									Somos una empresa dirigida a la distribución y venta de repuestos automotrices de las marcas mas
									reconocidas a nivel mundial, ofreciendo estándares de calidad y garantizando su compra en todo
									momento.
								</Typography>
							</Grid>
						</Grid>
						<Grid container spacing={24} className="GridQuienes">
							<Grid item xs={12} sm={12} md={5} className="txtQuienes">
								<Typography>
									Siempre estamos en búsqueda de la excelencia y es por esto que queremos ofrecerle la mejor de las
									atenciones, en este caso de manera virtual implementando nuestra tienda online donde podrá encontrar
									toda clase de repuestos y realizar sus pagos de manera fácil y segura mediante Paypal.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12} md={7} className="QuienesBanner2">
								<img src={banner3} alt="" />
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</div>
			<Footer />
		</>
	);
}

export default QuienesSomos;
