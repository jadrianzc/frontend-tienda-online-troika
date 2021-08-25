import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/images/logo3.png';
import '../QuienesSomos/QuienesSomos.css';
import './Agencias.css';
import MapView from './MapView';
import Footer from '../Footer/Footer';

function Agencias() {
	return (
		<>
			<div className="ContQuinesSomos ContAgencias">
				<Card className="CardQuienesSomos">
					<CardContent className="container-agencia">
						<Typography className="TitleAgenci1" variant="h1">
							Manta
						</Typography>
						<Grid container spacing={24}>
							<Grid item xs={12} sm={12} md={7} className="AgenciasMapa">
								<MapView />
							</Grid>
							<Grid item xs={12} sm={12} md={5}>
								<div className="logoQuienes">
									<img src={logo} alt="" />
								</div>
								<div className="txtAgencia">
									<Typography className="TitleAgenci2" variant="h1">
										Agencia Manta
									</Typography>
									<Typography>
										Avenida 4 de Noviembre, entre calle J-12 y J-14. Instalaciones de JanaBikes.
										<br />
										<br /> Contacto: grupotroika@gmail.com <br />
										0998179005 <br />
										0998694410
									</Typography>
								</div>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</div>
			<Footer />
		</>
	);
}

export default Agencias;
