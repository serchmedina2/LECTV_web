## Estructura de carpetas del proyecto
El proyecto consta de las siguientes carpetas donde se almacena todo el contenido del sitio :
| Carpeta | Descripción |
|--|--|
| bootstrap | Carpeta del framework de trabajo bootstrap, no modificar a menos que sea para actualizar a la última versión.  |
| documentation | Contiene el resto de la documentacion de la pagina web |
| dynamics | Contiene los scripts (programas) que permiten el funcionamiento de varias funcionalidades de la página web, entre ellas el mapa de la seccion de proyectos. La documentación precisa de cada programa está embebida en el propio archivo del script.   |
| node_modules | Carpeta que contiene utilidades y las [tecnologías](tecnologias.md) (API) que se usaron para dotar de funcionalidades extra a la página |
| statics | Contine los archivos css, que dotan de estilos a cada una de las secciones de la página del laboratorio. También guarda la carpeta de imágenes del laboratorio y los archivos de las fuentes que se utilizan en el proyecto.  |
| templates | Contiene todos los documentos `.html` que conforman la pagina web, además de las carpetas que contienen cada sección de la página web. Aquí se guardan las plantillas para generar, entre otras cosas, nuevas páginas de biografías y proyectos.   |

> **Nota 1**: Adicionalmente, hay que mencionar que el archivo: `.gitignore`,  que se utiliza par a indicarle a git cuando ignorar  ciertos archivos y no respaldarlos en el control de versiones, puede ser modificado dependiendo de donde se baje el proyecto.
> 
> **Nota 2**: En los archivos de plantillas hay que modificar algunas rutas y otros elementos el código para que las páginas finales funcionen adecuadamente.
> 
> **Nota 3**: Con documentación embebida nos referimos a los comentarios dentro del código de cada archivo. Estos describen en gran medida como modificar cada archivo.
## Carpetas de `template`
En template se crearon las siguientes carpetas que guardan los contenidos de cada sección de la página del laboratorio.
| Carpetas| Descripción |
|--|--|
| `templates`| Nombre de la carpeta raíz. Contiene los documentos que presentan el contenido de la página, artículos, videos, infografías, talleres, etcétera y redirigen a archivos contenidos dentro de las carpetas que se describen a continuación. Adicionalmente contiene el documento con el mapa interactivo, llamado `proyectos.html` |
| `biographies` | Contiene todo el material relacionado a las biografías de los miembros y ex-miembros del laboratorio. Las imágenes, las semblanzas escritas, |
| `multimedia-section` | Contiene todo el material relacionado con la sección de multimedia, contiene las imágenes relacionadas a esta sección y los documentos `.html` de la galería, de las entrevistas y de los vídeos.  |
| `projects-section` |  Contiene todas las páginas de los proyectos en los que participa el laboratorio. Todos las nuevas páginas de proyectos que se generen deben ir aquí. | 
| `publicationes-section` |  Contiene todo el material relacionado con la sección de las seccion de referencias y materiales de consulta. Checar documentacion embebida para más información |
> 
> **Nota:** Todos los nuevos proyectos que se generen deben enlazarse con el mapa interactivo. Para ello en el archivo `projects-map.js` se debe modificar la función popUp. Se sugiere checar la documentación embebida en dicho archivo y la de  [leaflet.js](https://leafletjs.com/reference.html) 

## Carpetas de imagenes
Hay tres carpetas de imagenes:
| Carpetas  | Ruta y descripción  |
|--|--|
| `img` | Ruta: `oficial\statics\img`. Contiene las carpetas donde se pueden guardar las imagenes de la sección de noticias, las de todos los proyectos, los logos de los patrocinadores y otras imagenes, ejemplo: las de la sección de "quienes somos", etc. |
|`img2`|Ruta: `oficial\templates\biographies\img2`. Contiene **todas** las fotografías de cada una de las personas que trabaja en el laboratorio|
| `img-multimedia` |Ruta: `oficial\templates\multimedia-section`. Contiene todas las imagenes relacionadas con la seccion de multimedia. Miniaturas de las entrevistas y vídeos; las infografías genereadas en el laboratorio y **todas** las imágenes de la galeria. |