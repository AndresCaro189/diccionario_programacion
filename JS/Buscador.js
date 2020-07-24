const elementos = [
    {referencia:'html', nombre: 'html',      significado: 'El formato HTML (HyperText Markup Language) es el estándar para la creación de sitios web. ... Algunos programas de correo electrónico permiten el uso de HTML para dar formato al texto de un documento. HTML y XHTML están relacionados, pero son independientes.'},

    {referencia:'JavaScrip', nombre: 'JavaScrip', significado: 'JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas. Una página web dinámica es aquella que incorpora efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al usuario.'},

    {referencia:'CSS', nombre: 'CSS',       significado: 'CSS es un lenguaje utilizado en la presentación de documentos HTML. Un documento HTML viene siendo coloquialmente “una página web”. Entonces podemos decir que el lenguaje CSS sirve para organizar la presentación y aspecto de una página web.'},

    {referencia:'Ubuntu', nombre: 'Ubuntu',    significado: '(pronunciado /ʊˈbʊntuː/; estilizado como ubuntu) es un sistema operativo de software libre y código abierto. Es una distribución de Linux basada en Debian. Actualmente corre en computadores de escritorio y servidores. Está orientado al usuario promedio, con un fuerte enfoque en la facilidad de uso y en mejorar la experiencia del usuario. Está compuesto de múltiple software normalmente distribuido bajo una licencia libre o de código abierto. Estadísticas web sugieren que la cuota de mercado de Ubuntu dentro de las distribuciones Linux es, aproximadamente, del 52 %,​ y con una tendencia a aumentar como servidor web.5'},

    {referencia:'Ubuntu', nombre: 'terminar',   significado: 'En informática, se denomina como un(a) terminal o consola (hardware) es un dispositivo electrónico o electromecánico que se utiliza para interactuar con un(a) computador(a). Suele confundirse con su homónimo virtual, programado para emular las especificaciones de un terminal estándar'},

    {referencia:'Ubuntu', nombre: 'comando',      significado: 'Una orden/instrucción (también conocida con el extendido anglicismo/barbarismo comando -calco del inglés command, que significa orden, mandato-)1​ es una instrucción que el usuario proporciona a un sistema informático, desde la línea de órdenes (como una shell) o desde una llamada de programación. Puede ser interno (contenido en el propio intérprete) o externo (contenido en un archivo ejecutable)'},

    {referencia:'Ubuntu', nombre: 'date',      significado: 'Del lenguaje Ubunto muestra la fecha de hoy'},

    {referencia:'Ubuntu', nombre: 'echo',      significado: 'Del lenguaje Ubunto mostrar un mensaje en la pantalla ej {echo "Mauro"}'},

    {referencia:'Ubuntu', nombre: 'man',      significado: 'Del lenguaje Ubunto información de otros comandos ej {man}'},

    {referencia:'Ubuntu', nombre: 'history',      significado: 'Del lenguaje Ubunto nos permite ver todos los comandos utilizados alguna vez ej {history}'},

    {referencia:'Ubuntu', nombre: 'Windows Subsystem for Linux.',      significado: 'Del lenguaje Ubunto Windows Subsystem for Linux (WSL) es una capa de compatibilidad desarrollada por Microsoft para correr ejecutables de Linux (en formato ELF) nativamente en Windows 10 y Windows Server 2019. Está basado en el descontinuado Windows Subsystem for Android, mejor conocido como "Project Astoria", que estuvo presente en varias builds de Windows 10 Mobile. se tiene que activar desde window'},

    {referencia:'Ubuntu', nombre: 'sistema de archivos',      significado: 'El sistema de archivos o sistema de ficheros es el componente del sistema operativo encargado de administrar y facilitar el uso de las memorias periféricas, ya sean secundarias o terciarias.1​. Sus principales funciones son la asignación de espacio a los archivos, la administración del espacio libre y del acceso a los datos resguardados. Estructuran la información guardada en un dispositivo de almacenamiento de datos o unidad de almacenamiento (normalmente un disco duro de una computadora), que luego será representada ya sea textual o gráficamente utilizando un gestor de archivos.'},

    {referencia:'Ubuntu', nombre: 'arbol de directorios',      significado: 'árbol de directorio. ... Árbol de directorio: Es una representación gráfica de la estructura de los directorios y subdirectorios que tiene un suporte de memoria (disco duros, pendrive, etc.). Su nombre deriva de la estructura arborescente que usa (tiene forma de árbol, con una "raíz", un "tronco", "ramas" y "hojas" ).'},

    {referencia:'Ubuntu', nombre: 'identificacion de archivos',      significado: 'Un archivo o fichero informático es un conjunto de bytes que son almacenados en un dispositivo. Un archivo es identificado por un nombre y la descripción de la carpeta o directorio que lo contiene. A los archivos informáticos se les llama así porque son los equivalentes digitales de los archivos escritos en expedientes, tarjetas, libretas, papel o microfichas del entorno de oficina tradicional.'},

    {referencia:'Ubuntu', nombre: 'ls',      significado: 'Del lenguaje Ubunto ver Listar archivos'},

    {referencia:'Ubuntu', nombre: 'ls -a',      significado: 'Del lenguaje Ubunto Listar archivos ocultos'},

    {referencia:'Ubuntu', nombre: 'ls -l',      significado: 'Del lenguaje Ubunto ver si creamos un directorio'},

    {referencia:'Ubuntu', nombre: 'ls -lh',      significado: 'Del lenguaje Ubunto Muestra la misma información que ls -l pero con las unidades de tamaño en KB, MB'},

    {referencia:'Ubuntu', nombre: 'ls -R',      significado: 'Del lenguaje Ubunto Muestra el contenido de todos los subdirectorios de forma recursiva'},

    {referencia:'Ubuntu', nombre: 'ls -S',      significado: 'Del lenguaje Ubunto MuestraOrdena los resultados por tamaño de archivo'},

    {referencia:'Ubuntu', nombre: 'ls -x',      significado: 'Del lenguaje Ubunto Ordena elementos primero por nombre y después por extensión'},

    {referencia:'Ubuntu', nombre: 'ls -X',      significado: 'Del lenguaje Ubunto Ordena Ordena los elementos primero por extensión y luego por nombre'},

    {referencia:'Ubuntu', nombre: 'pwd',      significado: 'Del lenguaje Ubunto Identificar el directorio'},

    {referencia:'Ubuntu', nombre: 'cd',      significado: 'Del lenguaje Ubunto cambiar de directorio ej{cd/home/mi_usuario}'},

    {referencia:'Ubuntu', nombre: 'mkdir',      significado: 'Del lenguaje Ubunto crear un directorio'},

    {referencia:'Ubuntu', nombre: 'cp',      significado: 'Del lenguaje Ubunto copiar un directorio'},

    {referencia:'Ubuntu', nombre: 'rm',      significado: 'Del lenguaje Ubunto borrar un archivo'},

    {referencia:'Ubuntu', nombre: 'mv',      significado: 'Del lenguaje Ubunto mover un archivo ej{>mv [ruta del archivo] [directorio hacia el que se va a mover]}'},

    {referencia:'Ubuntu', nombre: 'rmdir',      significado: 'Del lenguaje Ubunto borrar un directorio ej{rmdir [ruta / nombre del directorio a eliminar]}'},

    {referencia:'Ubuntu', nombre: 'Archivos Binarios',  significado: 'Son archivos que solo pueden ser entendidos por computadoras, algunos ejemplos son:  Programas Ejecutables Archivos de Datos'},

    {referencia:'Ubuntu', nombre: 'Archivos de Texto',  significado: 'Son archivo también binarios pero estos tienen caracteres que los hacen legible para el ser humano. Ejemplos: Paginas Web Código fuente'},

    {referencia:'Ubuntu', nombre: 'Utilidades Interactivas',  significado: 'Programas que se ejecuta inmediatamente al ejecutar el comando. en tiempo real.'},

    {referencia:'Ubuntu', nombre: 'vim',      significado: ' Es un comando que permite escribir sobre un archivo. Al estar en el VIM podemos escribir, tecleando la tecla ‘i’ (Insert) y podemos guardar lo editado tecleando, dos puntos (😃 y escribiendo w (writen). para salir del VIM: (Dos puntos [:], y luego la letra q´)'},

    {referencia:'Ubuntu', nombre: 'nano',      significado: 'Es otro comando que permite editar un archivo igual que en vim, pero la diferencia es que este entra en modo edición, de una vez y nos muestra un listado de comandos que podemos utilizar.  para poder salir de el utilizamos CTRL + X (Guardamos antes de salir)'},

    {referencia:'Ubuntu', nombre: 'touch',  significado: 'nos permite crear archivos ej {> touch archivo.txt}'},

    {referencia:'Ubuntu', nombre: 'Utilidades Batch: cat',      significado: 'Nos muestra el contenido completo de un archivo ejemplo: cat tables.txt'},

    {referencia:'Ubuntu', nombre: 'Utilidades Batch: head',      significado: 'Nos muestra las primeras lineas (También podemos escoger cuantas lineas queremos utilizando el modificador [-n #]). Ejemplos: head tables.txt,  head -n 5 tables.txt'},

    {referencia:'Ubuntu', nombre: 'Utilidades Batch: tail',      significado: 'Muestras las ultimas lineas del final (Inverso a head, tambien le funciona modificadores) Ejemplos: tailtables.txt, tail -n 5 tables.txt'},

    {referencia:'Ubuntu', nombre: 'Utilidades Batch Avanzadas: grep',      significado: 'Permite trabajar con expresiones regulares, funciona como un buscador dentro del archivo. Ejemplos:  grep hanks dump1.sql = [comando][expresión regular][archivo], Para buscar sin importar si esta en mayuscula o miniscula: grep -i hanks dump1.sql Tambien podemos buscar una expresión de una frase que termine con la misma palabra que estemos buscando: grep -i “hanks’),$” .'},

    {referencia:'Ubuntu', nombre: 'Utilidades Batch Avanzadas: sed',      significado: 'Screem Editor, tratamiento de flujos de caracteres. Este comando nos permite reemplazar una expresión por otra. ejemplos: sed ‘s/hanks/selleck/g’ dump1.sql = [comando][subcomando- sustitución][expresión original][nueva expresión][modificador-(/g de global, indica que tiene que hacerse a lo largo de todo el flujo)][Indicar cual es el flujo a utilizar (Archivo de texto)] SED no modifica el archivo, lo que hace es crear un nuevo flujo con la modificación Para eliminar la ultima linea podemos utilizar: 2. sed ‘$d’ nuevasPelis.csv = [Comando][’$sub-comando’][archivo]'},

    {referencia:'Ubuntu', nombre: 'Utilidades Batch Avanzadas: awk',      significado: 'Trataminento de texto delimitado, este comando sirve para trabajar con archivos de textos delimitados por comas. Ejemplos: awk -F ‘;’ ‘{ print $1}’ nuevasPelis.csv'},

    {referencia:'Ubuntu', nombre: 'Flujos de información estándar',      significado: 'En todos los sistemas Unix existen tres flujos de información: standard input (stdin): datos que se envian al programa. standard output (stdout): datos que devuelve el programa. standard error (stderr): flujo usado por los programas para enviar un informe de errores.'},

    {referencia:'Ubuntu', nombre: 'Procesamiento de datos',      significado: 'El procesamiento de datos es, en general, "la acumulación y manipulación de elementos de datos para producir información significativa." El procesamiento de datos trata de un subconjunto del procesamiento de la información, el cambio (procesamiento) de la información de cualquier manera detectable por un observador.'},

    {referencia:'Ubuntu', nombre: 'nombre_comando &',      significado: 'Ejecuta un comando {nombre_comando} en segundo plano, otra opción {Ctrl+z}'  },

    {referencia:'Ubuntu', nombre: 'fg',      significado: 'Trae a primer plano un comando que se este ejecutando en segundo plano'  },

    {referencia:'Ubuntu', nombre: 'ps',      significado: 'Muestra los procesos que se estan ejecutando'  },

    {referencia:'Ubuntu', nombre: 'ps -ax',      significado: 'Muestra los procesos que se estan ejecutando del sistema'  },

    {referencia:'Ubuntu', nombre: 'top',      significado: 'Muestra de forma interactiva como los procesos van cambiando en tiempo real, con la letra {q} se sale de la interfaz'  },

    {referencia:'Ubuntu', nombre: 'kill -nombre_prioridad -numero_proceso',      significado: 'Termina un proceso con prioridad con identificación del numero del proceso. ejemplo kill -9  130663 (9 es la máxima prioridad termina con el proceso de inmediato)'  },

    {referencia:'Ubuntu', nombre: 'kill -nombre_prioridad -numero_ejecutable',      significado: 'Termina un proceso con prioridad con identificación del nombre del ejecutable del proceso nombre_ejecutable. ejemplo kill -9 php colgado.php (9 es la máxima prioridad termina con el proceso de inmediato)'  },

    {referencia:'Ubuntu', nombre: 'Permisos de acceso a archivos',      significado: 'La mayoría de los sistemas de archivos modernos permiten asignar permisos (o derechos de acceso) a los archivos para determinados usuarios y grupos de usuarios. De esta manera, se puede restringir o permitir el acceso de un determinado usuario a un archivo para su visualización de contenidos, modificación y/o ejecución (en caso de un archivo ejecutable).'  },

    {referencia:'Ubuntu', nombre: 'El sistema de permisos octal',      significado: 'Notación octal. La notación octal consiste de valores de tres a cuatro dígitos en base-8. Con la notación octal de tres dígitos cada número representa un componente diferente de permisos a establecer: clase de usuario, clase de grupo y clase de otros (resto del mundo) respectivamente.'  },

    {referencia:'Ubuntu', nombre: 'chmod o-w nombre_archivo.txt',      significado: 'Modifica los permisos de un archivo  {nombre_archivo.txt} o directorio para usuarios aclaración * 0 Para otros usuarios, * -w(write)quitar el permiso de escritura al archivo'  },

    {referencia:'Ubuntu', nombre: 'chmod +x nombre_archivo.txt',      significado: 'Modifica los permisos de un archivo  {nombre_archivo.txt} o directorio para usuarios aclaración * +x(Execute) agrega el permiso de ejecutar a todos los usuarios'  },

    {referencia:'Ubuntu', nombre: 'chmod 760 nombre_archivo.txt',      significado: 'Modifica los permisos de un archivo  {nombre_archivo.txt} o directorio para usuarios aclaración * 7 todos los permisos lectura (r), escritura(w), y ejecución(x) para el usuario propietario *6 los permisos lectura (r) y escritura(w) *0 denegados todos los servicios de usuario'  },

    {referencia:'Ubuntu', nombre: 'sudo nombre_del_comando',      significado: 'Permite ejecutar comandos nombre_del_comando con permisos especiales, (comandos que no sejan ejecutar por otro usuario), como el administrador del sistema'  },

    {referencia:'Ubuntu', nombre: 'sudo chown nombre_usuario nombre_archivo.txt',      significado: 'Permite cambiar el propietario de un archivo nombre_archivo.txt     por otro usuario del sistema nombre_usuario'  },

    {referencia:'Ubuntu', nombre: 'sudo chogrp nombre_grupo nombre_archivo.txt',      significado: 'Permite cambiar el propietario de un archivo nombre_archivo.txt     por otro grupo del sistema nombre_grupo'  },

    {referencia:'Ubuntu', nombre: 'Sistema de gestión de paquetes',      significado: 'Un sistema de gestión de paquetes, también conocido como gestor de paquetes, es una colección de herramientas que sirven para automatizar el proceso de instalación, actualización, configuración y eliminación de paquetes de software. El término se usa comúnmente para referirse a los gestores de paquetes en sistemas Unix-like, especialmente GNU/Linux, ya que se apoyan considerablemente en estos sistemas de gestión de paquetes.'  },

    {referencia:'Ubuntu', nombre: 'Paquetes de Software',      significado: 'Existen programas que se descargan e instalan sus archivos de programa en lugares ya indicados y se configuran para que dicho programa pueda correr en la computadora. Los paquetes de software se encargan de realizar todo lo anterior dicho.'},

    {referencia:'Ubuntu', nombre: 'Paquetes binarios',      significado: 'Resultados de búsqueda Fragmento destacado de la Web Un paquete es un conjunto de ficheros relacionados con una aplicación, que contiene los objetos ejecutables, los archivos de configuración, información acerca del uso e instalación de la aplicación, todo ello agrupado en un mismo contenedor. Encontramos los binarios y los que son el código fuente.'},

    {referencia:'Ubuntu', nombre: 'Administradores de Paquetes',      significado: 'Estos son los que conocen de donde realizar las descargas, que otros paquetes ya están instalados en nuestro sistema y como configurar todo, a medida que no haya conflicto. '},

    {referencia:'Ubuntu', nombre: 'Paquetes binarios apt',      significado: 'Se utiliza en las distribuciones de Linux basadas en Devian como Ubuntu'},

    {referencia:'Ubuntu', nombre: 'Paquetes binarios zypper',      significado: 'Se utiliza en las distribuciones de Suse linux'},

    {referencia:'Ubuntu', nombre: 'Paquetes binarios rpm',      significado: 'El universal'},

    {referencia:'Ubuntu', nombre: 'Paquetes de Lenguajes',      significado: 'Estos son librerías escritas en el mismo lenguaje que vas a utilizar.'},

    {referencia:'Ubuntu', nombre: 'Paquetes de Lenguajes pip',      significado: 'Es para Python ejemplo: [sudo][pip][install][pandas] = pandas es el nombre de la librería.'},

    {referencia:'Ubuntu', nombre: 'Paquetes de Lenguajes composer',      significado: 'PHP'},

    {referencia:'Ubuntu', nombre: 'Paquetes de Lenguajes npm',      significado: 'NODE JS'},

    {referencia:'Ubuntu', nombre: 'Herramientas de compresión',      significado: 'Cualquier distribución de Linux incluirá tanto tar como los paquetes con las librerías y utilidades para comprimir y descomprimir ficheros tanto con gzip como con bzip2. Además, actualmente tar está muy integrado con ambos algoritmos de compresión y nos evita tener que utilizar comandos algo más complicados para comprimir y descomprimir ficheros'},

    {referencia:'Ubuntu', nombre: 'compresión de archivos',      significado: 'Es cuando se reduce el tamaño de la información para que ocupe menos espacio, sin afectar al contenido; o se juntan varios archivos en uno solo. Cuantos más bits se usen, más grande será el archivo. El número de bits no se puede modificar; por eso se usa la compresión.'},

    {referencia:'Ubuntu', nombre: 'gzip nombre_archivo.txt',      significado: 'Comprime el archivo nombre_archivo.txt'},

    {referencia:'Ubuntu', nombre: 'gzip -d nombre_archivo.txt',      significado: 'Descomprime el archivo nombre_archivo.txt'},

    {referencia:'Ubuntu', nombre: 'tar cf nuevo_archivo.tar archivos/*',      significado: 'Agrupa todos los archivos que estan en el directorio {archivos} en un solo archivo nuevo_archivo.tar'},

    {referencia:'Ubuntu', nombre: 'tar tf nombre_archivo.tar',      significado: 'Muestra el contenido del archivo nombre_archivo.tar'},

    {referencia:'Ubuntu', nombre: 'tar xf nombre_archivo.tar',      significado: 'Desagrupa el contenido del archivo nombre_archivo.tar'},

    {referencia:'Ubuntu', nombre: 'tar czf nuevo_archivo.tgz archivos/*',      significado: 'Agrupa todos los archivos que estan en el derectorio {archivos} en un solo archivo nuevo_archivo.tgz y los comprime'},

    {referencia:'Ubuntu', nombre: 'tar xzf nombre_archivo.tgz',      significado: 'Desagrupa el contenido del archivo nombre_archivo.tgz y los descomprime'},

    {referencia:'Ubuntu', nombre: 'locate palabra_buscada',      significado: 'Realizar una búsqueda en todo el sistema de archivos, de la palabra palabra_busqueda, debe estar actualizada la base de datos de archivos de sistema para que funcione óptimamente'},

    {referencia:'Ubuntu', nombre: 'sudo updatedb',      significado: 'Actualizar la base de datos del sistema'},

    {referencia:'Ubuntu', nombre: 'whereis comando_buscado',      significado: 'Realizar la búsqueda de archivos binarios (comandos) comando_buscado'},

    {referencia:'Ubuntu', nombre: 'find directorio_busqueda -parametro',      significado: 'Realiza búsquedas mas complejas, que se dejan personalizar con párametros '},

    {referencia:'Ubuntu', nombre: 'curl http://url.com',      significado: 'Sirve para hacer pedidos (crudos) a un servidor HTTP desde su URL nos devuelve el HTML del servidor'},

    {referencia:'Ubuntu', nombre: 'curl -v http://url.com',      significado: 'Sirve para hacer pedidos (crudos) a un servidor HTTP desde su URL nos devuelve el HTML del servidor y toda la comunicación HTTP'},

    {referencia:'Ubuntu', nombre: 'curl -v http://url.com > /dev/null',      significado: 'Sirve para hacer pedidos (crudos) a un servidor HTTP desde su URL nos devuelve toda la información de los encabezados HTTP'},

    {referencia:'Ubuntu', nombre: 'wget http://url.com',      significado: 'Sirve para realizar descargas desde servidores HTTP archivos binarios'},

    {referencia:'Ubuntu', nombre: 'ssh',      significado: ' Secure shell (Terminal segura),Con este comando ingresamos a un servidod de manera segura. ejemplo: ssh leeway -prod'},

    {referencia:'Ubuntu', nombre: 'mail',      significado: 'Nos permite enviar un email desde el servidor. Para que este comando funcione hay que tener algunas cosas configuradas Ejemplo: echo “Probando” | mail -s(-s: es el asunto del correo) “Probando para platzi” mchojrin1@hotmail.com"'},

    {referencia:'Ubuntu', nombre: 'variables de entorno',      significado: 'Las variables de entorno son cadenas que contienen información acerca del entorno para el sistema y el usuario que ha iniciado sesión en ese momento. Algunos programas de software usan la información para determinar dónde se colocan los archivos (como los archivos temporales).'},

    {referencia:'Ubuntu', nombre: 'Asignación de las variables de entorno export   ',      significado: 'Este comando se utiliza para asignar a toda la sesión Ejemplo: export MI_VAR = mauro, si luego escribimos echo $MI_VAR se mostrará mauro en la terminal. (Este permanecerá miestras dure mi sesión)'},

    {referencia:'Ubuntu', nombre: 'Asignación de las variables de entorno var',      significado: 'Este comando solo asigna el valor para el proximo proceso que se va a ejecutar. este no es muy usual. Ejemplo: MI_VAR=/home php env.php'},

    {referencia:'Ubuntu', nombre: 'Script',      significado: 'En informática, un script, secuencia de comandos1​ o guion2​3​4​ (traduciendo desde inglés) es un término informal que se usa para designar a un programa relativamente simple. Los scripts regularmente no se compilan con anticipación a código máquina, sino que son ejecutados por un intérprete que lee el archivo de código fuente al momento; o incluso por una consola interactiva donde el usuario suministra el programa al intérprete paso a paso. Los scripts o guiones se pueden usar para prototipar programas, automatizar tareas repetitivas, hacer procesamiento por lotes e interactuar con el sistema operativo y el usuario (debido a esto, los intérpretes de comandos o shells suelen diseñarse con funcionalidades de programación).'},

    {referencia:'Ubuntu', nombre: 'Bash ',      significado: 'Bash es un procesador de comandos que generalmente se ejecuta en una ventana de texto donde el usuario escribe comandos que causan acciones. Bash también puede leer y ejecutar comandos desde un archivo, llamado script de shell. ... Bash es un shell compatible con POSIX, pero con varias extensiones.'},

    {referencia:'Ubuntu', nombre: 'at now + tiempo unidad_de_tiempo',      significado: '#Ejecuta una tarea después de un tiempo'},

    {referencia:'Ubuntu', nombre: '_crontab -e',      significado: '#muestra las tabla de cron o de tareas programadas _ctrol+i #insertar nueva información'}


]

const formulario = document.querySelector('#formulario')
const button1    = document.querySelector('#button1')
const resultado  = document.querySelector('#resultado')

const filtrar = () =>{
    //console.log(formulario.value);
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase()

    for(let elemento of elementos){
        let nombre = elemento.nombre.toLowerCase()
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += ` <li><strong>${elemento.referencia}</strong> ${elemento.nombre} <strong>Significado:</strong> ${elemento.significado}</li> `
        }
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Elemento no encontrado...</li>`
    }
}

button1.addEventListener('click', filtrar)
formulario.addEventListener('keyup',filtrar)

