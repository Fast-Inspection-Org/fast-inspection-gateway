export const sistemasConfigExample = `[
    {
      "nombre": "Estructural",
      "herramienta": {
        "nombre": "Herramienta Analisis Criticidad A",
        "tipo": "herramientaAnalisisCriticidad"
      },
      "subSistemasConfig": [
        {
          "nombre": "Columna",
          "materialesConfig": [
            {
              "nombre": "Piedra",
              "tiposDeteriorosConfig": [
                {
                  "nombre": "Grieta",
                  "tipo": "tipoDeterioroAnalisisCriticidadConfig",
                  "detectabilidad": 1,
                  "camposAfectados": [
                    {
                      "nombre": "Salud"
                    },
                    {
                      "nombre": "Estructura"
                    }
                  ],
                  "camposDefinidos": [
                    {
                      "nombre": "largo",
                      "tipo": "CampoDefinidoNumerico",
                      "inicioIntervalo": 0,
                      "finalIntervalo": 1000,
                      "unidadMedida": "cm"
                    },
                    {
                      "nombre": "ancho",
                      "tipo": "CampoDefinidoNumerico",
                      "inicioIntervalo": 0,
                      "finalIntervalo": 1000,
                      "unidadMedida": "cm"
                    },
                    {
                      "nombre": "Descripcion",
                      "tipo": "CampoDefinidoTexto"
                    },
                    {
                      "nombre": "Severidad",
                      "tipo": "CampoDefinidoSeleccion",
                      "opciones": ["Baja", "Moderada", "Alta"]
                    }
                  ],
                  "causas": [
                    {
                      "nombre": "Humedad"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]`;

export const indicesCalculablesObtainsExample = `[
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
  ]`;

export const indicesCalculablesExample = `[
    {
      "nombre": "Indice Calculable Detectabilidad",
      "tipo": "indiceCalculableSinIntervalo",
      "calculo": "Detectabilidad",
      "indicadoresSinIntervalos": [
        {
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorSinIntervalo"
        },
        {
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorSinIntervalo"
        },
        {
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorSinIntervalo"
        }
      ]
    },
    {
      "nombre": "Indice Calculable Impacto ",
      "tipo": "indiceCalculableIntervalo",
      "calculo": "Impacto",
      "indicadoresIntervalos": [
        {
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 0,
          "limiteSuperior": 30
        },
        {
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 30,
          "limiteSuperior": 50
        },
        {
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 50,
          "limiteSuperior": 2147483647
        }
      ]
    },
    {
      "nombre": "Indice Calculable Frecuencia ",
      "tipo": "indiceCalculableIntervalo",
      "calculo": "Frecuencia",
      "indicadoresIntervalos": [
        {
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 0,
          "limiteSuperior": 30
        },
        {
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 30,
          "limiteSuperior": 50
        },
        {
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 50,
          "limiteSuperior": 2147483647
        }
      ]
    },
    {
      "nombre": "Indice Calculable Criticidad ",
      "tipo": "indiceCalculableIntervalo",
      "calculo": "Criticidad",
      "indicadoresIntervalos": [
        {
          "nombre": "baja",
          "valor": 1,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 0,
          "limiteSuperior": 30
        },
        {
          "nombre": "media",
          "valor": 2,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 30,
          "limiteSuperior": 50
        },
        {
          "nombre": "alta",
          "valor": 3,
          "tipo": "indicadorIntervalo",
          "limiteInferior": 50,
          "limiteSuperior": 100
        }
      ]
    }
  ]`;

export const herramientasObtainsExample = `[
    {
      "id": 1,
      "nombre": "Herramienta Analisis Criticidad A",
      "tipo": "herramientaAnalisisCriticidad",
      "campos": [
        {
          "nombre": "Salud",
          "nivelImportancia": 3,
          "configVersion": 1,
          "id": 1,
          "herramientaAnalisisCriticidadId": 1
        },
        {
          "nombre": "Estructura",
          "nivelImportancia": 3,
          "configVersion": 1,
          "id": 2,
          "herramientaAnalisisCriticidadId": 1
        }
      ]
    }
  ]`;

export const herramientasExample = `[
      {
        "id": 61,
        "nombre": "Herramienta Analisis Criticidad A",
        "tipo": "herramientaAnalisisCriticidad",
        "campos": [
          {
            "nombre": "Salud",
            "nivelImportancia": 3
          },
          {
            "nombre": "Estructura",
            "nivelImportancia": 3
          }
        ]
      }
    ]`;
