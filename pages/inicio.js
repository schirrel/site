import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Button from "../components/button";
import Menu from "../components/menu";

const saibaMais = () => {
	alert("hi");
};


const Home = () => (
                    <div>
	                    <div className="capa esticar-largura">
	                    <h3 className="titulo">
	                    Boas Vindas a Guilda<strong>Tech</strong>
	                    </h3>
	                    <p className="descricao">
	                    Somos uma comunidade inclusiva em que assustos <br />
	                    de todos os tipos são tratados,
	                    <br /> inclusive <strong>Programação</strong>
	                    </p>

	                    <Button onClick={saibaMais} title="Saiba Mais">
	                    </Button>
	                    </div>
	                    <div className="simbolo esticar-largura">
	                    	<svg width="298" height="235" viewBox="0 0 298 235" fill="none" xmlns="http://www.w3.org/2000/svg">
	                   		 <path d="M48.8281 187.562C48.8281 190.688 49.2188 193.227 50 195.18C50.7812 197.198 51.888 198.76 53.3203 199.867C54.8177 201.039 56.6081 201.82 58.6914 202.211C60.8398 202.667 63.2161 202.927 65.8203 202.992V217.641C60.8073 217.576 56.1523 216.99 51.8555 215.883C47.6237 214.841 43.9453 213.148 40.8203 210.805C37.7604 208.526 35.3516 205.596 33.5938 202.016C31.8359 198.435 30.957 194.105 30.957 189.027V156.41C30.957 149.704 28.8086 144.952 24.5117 142.152C20.2799 139.353 14.0951 137.953 5.95703 137.953V122.816C14.0951 122.816 20.2799 121.417 24.5117 118.617C28.8086 115.818 30.957 111.065 30.957 104.359V71.8398C30.957 66.7617 31.8359 62.4323 33.5938 58.8516C35.3516 55.2708 37.7604 52.3411 40.8203 50.0625C43.9453 47.7188 47.6237 46.026 51.8555 44.9844C56.1523 43.8776 60.8073 43.2917 65.8203 43.2266V57.7773C63.2161 57.8424 60.8398 58.1029 58.6914 58.5586C56.6081 58.9492 54.8177 59.7305 53.3203 60.9023C51.888 62.0091 50.7812 63.5716 50 65.5898C49.2188 67.543 48.8281 70.082 48.8281 73.207V105.629C48.8281 112.465 46.875 117.901 42.9688 121.938C39.1276 125.909 33.4635 128.546 25.9766 129.848V131.02C33.4635 132.322 39.1276 134.958 42.9688 138.93C46.875 142.901 48.8281 148.337 48.8281 155.238V187.562ZM248.73 155.238C248.73 148.337 250.651 142.901 254.492 138.93C258.398 134.958 264.095 132.322 271.582 131.02V129.848C264.095 128.546 258.398 125.909 254.492 121.938C250.651 117.901 248.73 112.465 248.73 105.629V73.207C248.73 70.082 248.34 67.543 247.559 65.5898C246.777 63.5716 245.638 62.0091 244.141 60.9023C242.708 59.7305 240.918 58.9492 238.77 58.5586C236.686 58.1029 234.342 57.8424 231.738 57.7773V43.2266C236.751 43.2917 241.374 43.8776 245.605 44.9844C249.902 46.026 253.581 47.7188 256.641 50.0625C259.766 52.3411 262.207 55.2708 263.965 58.8516C265.723 62.4323 266.602 66.7617 266.602 71.8398V104.359C266.602 107.745 267.122 110.609 268.164 112.953C269.271 115.297 270.866 117.217 272.949 118.715C275.098 120.147 277.734 121.189 280.859 121.84C283.984 122.491 287.565 122.816 291.602 122.816V137.953C283.464 137.953 277.246 139.353 272.949 142.152C268.717 144.952 266.602 149.704 266.602 156.41V189.027C266.602 194.105 265.723 198.435 263.965 202.016C262.207 205.596 259.766 208.526 256.641 210.805C253.581 213.148 249.902 214.841 245.605 215.883C241.374 216.99 236.751 217.576 231.738 217.641V202.992C234.342 202.927 236.686 202.667 238.77 202.211C240.918 201.82 242.708 201.039 244.141 199.867C245.638 198.76 246.777 197.198 247.559 195.18C248.34 193.227 248.73 190.688 248.73 187.562V155.238Z" fill="black"/>
	                    	 <path d="M223.752 102.855C221.562 78.7551 204.504 61.2705 183.157 61.2705C168.935 61.2705 155.913 68.9238 148.586 81.1899C141.325 68.7651 128.837 61.2676 114.842 61.2676C93.4979 61.2676 76.4373 78.7522 74.2507 102.852C74.0776 103.916 73.3679 109.518 75.5257 118.655C78.6355 131.832 85.8186 143.818 96.2933 153.309L148.551 200.732L201.706 153.312C212.181 143.818 219.364 131.835 222.474 118.655C224.631 109.521 223.922 103.919 223.752 102.855Z" fill="#E9B625"/>
	                    	</svg>

	                    </div>

 <style jsx>{`
                    	.esticar-largura {
                    		align-items: stretch;
                    		align-items: center;
                    	}


                    	main {
                    		padding-left: 220px;
                    	}

                    	@media (max-width: 768px) {
                    		.capa {
                    			width: 100%;
                    		}
                    		.simbolo {
                    			display: none;
                    		}
                    	}

                    	main > section {
                    		display: flex;
                    		flex-direction: row;
                    	}
                    	.capa,
                    	.simbolo {
                    		flex-direction: row;
                    		align-items: center;
                    		justify-content: center;
                    	}
                    	.capa {
                    		flex-grow: 2;
                    		color: #333;
                    	}
                    	.simbolo {
                    		height: 100%;
                    		flex-grow: 1;
                    		position: relative;
                    	}
                    	.titulo {
                    		margin: 0;
                    		width: 100%;
                    		padding-top: 80px;
                    		line-height: 1.15;
                    	}
                    	.titulo,
                    	.descricao {
                    		font-size: 22px;
                    	}
                    	`}</style>
                   
                    	</div>
                    	);

export default Home;
