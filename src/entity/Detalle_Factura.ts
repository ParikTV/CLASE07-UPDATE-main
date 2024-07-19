import { IsNotEmpty, IsPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CabeceraFactura } from "./Cabecera_Factura";
import { Producto } from "./Producto";

@Entity()
export class DetalleFactura {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la cantidad.' })
    @IsPositive({ message: 'Debe indicar un valor positivo.' })
    cantidad: number;

    @ManyToOne(() => CabeceraFactura)
    @IsNotEmpty({ message: 'Debe indicar la cabecera de factura.' })
    cabeceraFactura: CabeceraFactura;

    @ManyToOne(() => Producto)
    @IsNotEmpty({ message: 'Debe indicar el producto.' })
    producto: Producto;
}
