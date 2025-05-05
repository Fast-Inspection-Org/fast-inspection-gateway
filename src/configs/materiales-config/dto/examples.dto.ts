const tiposDeteriorosExample = `[
    {
      "id": 1,
      "nombre": "Indice Calculable Detectabilidad",
      "tipo": "indiceCalculableSinIntervalo",
      "calculo": "Detectabilidad",
      "indicadoresSinIntervalos": [
        {
          "id": 1,
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorSinIntervalo",
          "indiceCalculableSinIntervaloId": 1
        },
        {
          "id": 2,
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorSinIntervalo",
          "indiceCalculableSinIntervaloId": 1
        },
        {
          "id": 3,
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorSinIntervalo",
          "indiceCalculableSinIntervaloId": 1
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Indice Calculable Impacto ",
      "tipo": "indiceCalculableIntervalo",
      "calculo": "Impacto",
      "indicadoresIntervalos": [
        {
          "id": 4,
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 0,
          "limiteSuperior": 30,
          "indiceCalculableIntervaloId": 2
        },
        {
          "id": 5,
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 30,
          "limiteSuperior": 50,
          "indiceCalculableIntervaloId": 2
        },
        {
          "id": 6,
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 50,
          "limiteSuperior": 2147483647,
          "indiceCalculableIntervaloId": 2
        }
      ]
    },
    {
      "id": 3,
      "nombre": "Indice Calculable Frecuencia ",
      "tipo": "indiceCalculableIntervalo",
      "calculo": "Frecuencia",
      "indicadoresIntervalos": [
        {
          "id": 7,
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 0,
          "limiteSuperior": 30,
          "indiceCalculableIntervaloId": 3
        },
        {
          "id": 8,
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 30,
          "limiteSuperior": 50,
          "indiceCalculableIntervaloId": 3
        },
        {
          "id": 9,
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 50,
          "limiteSuperior": 2147483647,
          "indiceCalculableIntervaloId": 3
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Indice Calculable Criticidad ",
      "tipo": "indiceCalculableIntervalo",
      "calculo": "Criticidad",
      "indicadoresIntervalos": [
        {
          "id": 10,
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 0,
          "limiteSuperior": 30,
          "indiceCalculableIntervaloId": 4
        },
        {
          "id": 11,
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 30,
          "limiteSuperior": 50,
          "indiceCalculableIntervaloId": 4
        },
        {
          "id": 12,
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 50,
          "limiteSuperior": 100,
          "indiceCalculableIntervaloId": 4
        }
      ]
    }
  ],`;
