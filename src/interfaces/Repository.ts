export interface Repository {
    name: string;
    avatarUrl: string;
    description: string;
    language: string;
}

// Creación del arreglo con 5 instancias 
export const repositoryList: Repository[] = [ 
 { 
 name: "react-dashboard", 
 avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kpqYLGIsH8QBtpW_6BKAaPClEvweuMDTw&s", 
 description: "Un panel de control de administración moderno construido con React y Tailwind.", 
 language: "TypeScript" 
 }, 
 { 
 name: "fastapi-backend", 
 avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kpqYLGIsH8QBtpW_6BKAaPClEvweuMDTw&s", 
 description: "API REST de alto rendimiento para el manejo de usuarios y autenticación.", 
 language: "Python" 
 }, 
 { 
 name: "awesome-utils", 
 avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kpqYLGIsH8QBtpW_6BKAaPClEvweuMDTw&s", 
 description: "Colección de funciones utilitarias para el día a día en JavaScript vanilla.", 
 language: "JavaScript" 
 }, 
 { 
 name: "flutter-ecommerce", 
 avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kpqYLGIsH8QBtpW_6BKAaPClEvweuMDTw&s", 
 description: "Aplicación móvil de comercio electrónico con soporte para iOS y Android.", 
 language: "Dart" 
 }, 
 { 
 name: "rust-game-engine", 
 avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kpqYLGIsH8QBtpW_6BKAaPClEvweuMDTw&s", 
 description: "Un motor de videojuegos 2D enfocado en el rendimiento y la seguridad de memoria.", 
 language: "Rust" 
 } 
];