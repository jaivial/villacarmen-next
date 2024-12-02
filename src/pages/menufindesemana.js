import Link from 'next/link';
import '../globals.css';

export default function MenuFinDeSemana() {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold underline">
                Menu Fin de Semana
            </h1>
            <p className="mt-4">
                This is the Menu Fin de Semana page.
            </p>
            <Link href="/" className="text-blue-500 underline">
                Go back to Home
            </Link>
        </div>
    );
}
