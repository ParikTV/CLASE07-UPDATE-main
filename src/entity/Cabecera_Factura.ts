import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { DetalleFactura } from "./Detalle_Factura";

@Entity()
export class CabeceraFactura {
    @PrimaryGeneratedColumn()
    numero: number;

    @Column({ type: 'date', nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la fecha.' })
    fecha: Date;

    @ManyToOne(() => Cliente)
    @IsNotEmpty({ message: 'Debe indicar el cliente.' })
    cliente: Cliente;

    @ManyToOne(() => Vendedor)
    @IsNotEmpty({ message: 'Debe indicar el vendedor.' })
    vendedor: Vendedor;

    @OneToMany(() => DetalleFactura, detalleFactura => detalleFactura.cabeceraFactura)
    detalles: DetalleFactura[];
}
