# 🚀 LinkSwift | Acortador de URLs Profesional

**LinkSwift** es una solución de backend moderna y de alto rendimiento para acortar URLs. Está construida con **Node.js** y **TypeScript**, utilizando **Redis Cloud** como motor de almacenamiento en memoria para garantizar redirecciones instantáneas y persistencia global.

---

## 📋 Tabla de Contenidos
1. [Características](#-características)
2. [Requisitos Previos](#-requisitos-previos)
3. [Instalación y Configuración](#-instalación-y-configuración)
4. [Uso y Ejecución](#-uso-y-ejecución)
5. [Documentación de la API](#-documentación-de-la-api)
6. [Estructura del Proyecto](#-estructura-del-proyecto)
7. [Tecnologías Utilizadas](#-tecnologías-utilizadas)

---

## ✨ Características
* **Generación de Códigos Únicos**: Utiliza la primera sección de un `randomUUID` para crear identificadores cortos y seguros.
* **Almacenamiento en Memoria**: Conexión directa con **Redis Cloud** para una latencia mínima.
* **Gestión de Expiración (TTL)**: Los enlaces se eliminan automáticamente tras **1 semana** (604,800 segundos) para optimizar el almacenamiento.
* **Redirecciones Inteligentes**: Implementa respuestas HTTP 302 para dirigir al usuario a la URL original de forma transparente.
* **Frontend Integrado**: Incluye una interfaz minimalista y elegante construida con **Tailwind CSS**.
* **Seguridad**: Configuración de **CORS** habilitada para permitir la interacción segura entre el cliente y el servidor.

---

## 🛠️ Requisitos Previos
Para desplegar este proyecto en otra máquina, necesitarás:
* **Node.js**: Versión 18.0.0 o superior (Requerido por `redis` y `tsx`).
* **pnpm**: Gestor de paquetes eficiente (o npm/yarn).
* **Cuenta en Redis Cloud**: Para obtener las credenciales de la base de datos en la nube.
* **TypeScript**: El proyecto utiliza la versión 5.9.3 para la transpilación.

---

## ⚙️ Instalación y Configuración

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-de-tu-repositorio>
    cd url-shorter
    ```

2.  **Instalar dependencias**:
    ```bash
    pnpm install
    ```

3.  **Configuración de Variables de Entorno**:
    Crea un archivo `.env` en la raíz del proyecto. **Nota**: Este archivo no debe subirse al control de versiones.
    ```env
    DB_PORT=tu_puerto_redis
    DB_USERNAME=default
    DB_PASSWORD=tu_password_redis
    DB_HOST=tu_endpoint_redis_cloud
    ```

---

## 🚦 Uso y Ejecución

El proyecto incluye scripts optimizados en el `package.json` para el ciclo de vida del desarrollo:

### Modo Desarrollo
Inicia el servidor con recarga automática cada vez que detecte un cambio en el código (usando `tsx`):
```bash
pnpm dev
