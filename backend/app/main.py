from fastapi import FastAPI #importamos la clase principal
from fastapi.middleware.cors import CORSMiddleware #importamos el middleware de CORS
from routes import router #importamos las rutas definidas en routes.py


app = FastAPI() #creamos una instancia de la clase FastAPI

#creamos el filtro de seguridad

app.add_middleware(
    CORSMiddleware,  # Añadimos el middleware de CORS
    allow_origins=["*"],  # Permitir todas las orígenes
    allow_credentials=True,  # Permitir credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados
)

app.include_router(router) 
#Le decimos que use todas las rutas que se encuentran em el router creado
