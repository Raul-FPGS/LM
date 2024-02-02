function ordena_limites(ini, fin) {
    if (ini > fin) {
        aux = ini;
        ini = fin;
        fin = aux;
    }
    return ini, fin;
}

