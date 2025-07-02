from fastapi import APIRouter #sistema de ruta
from data import nombres #del data.py los nombres (datos)

router = APIRouter()#creamos un objeto para poder definir las rutas

@router.get("/nombres") #define ruta (o endpoint) GET llamada /nombres
def get_nombres():#nos regresara a la lista de los nombres
    return nombres #nos regresará a la lista de los nombres

#sirve como buena practica para seleccionar la rutas que tenemos 
#y asi no anotar todo en el main 


