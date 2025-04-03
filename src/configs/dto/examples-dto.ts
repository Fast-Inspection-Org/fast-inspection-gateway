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
