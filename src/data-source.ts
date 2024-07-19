import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Producto } from "./entity/Producto";
import { Categoria } from "./entity/Categoria";
import { CabeceraFactura } from "./entity/Cabecera_Factura";
import { Proveedor } from "./entity/Proveedor";
import { Vendedor } from "./entity/Vendedor";
import { DetalleFactura } from "./entity/Detalle_Factura";
import { Cliente } from "./entity/Cliente";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "utn123**",
    database: "ejemplodb",
    synchronize: true,
    logging: false,
    entities: [User, Producto, Categoria, CabeceraFactura, Proveedor, Vendedor, DetalleFactura, Cliente],
    migrations: [],
    subscribers: [],
});
