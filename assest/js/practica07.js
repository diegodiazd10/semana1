const platosTipicos = () => {
  // creamos opcion de menu
  let op = prompt(
    "Ingrese letra del Departamento: \nA - Quindio \nB - Antioquia \nC - Cundinamarca \nD - Valle del Cauca \nE - Risaralda"
  );
  if (op == null) {
    alert("Debe ingresar algun dato");
  } else {
    op = op.toLowerCase();
    console.log(op);
    if (op != "a" && op != "b" && op != "c" && op != "d" && op != "e") {
      alert("Debe ser una opcion Valida entre A y D");
    } else {      
      if (op == "a") {
        let op_ciudad = prompt(
          "Ingrese letra de la Ciudad: \nA - Armenia \nB - Calarca \nC - Montenegro \nD - Finlandia"
        );
        if (op_ciudad == null) {
          alert("Debe ingresar algun dato");
        } else {
          op_ciudad = op_ciudad.toLowerCase();
          let receta = "";
          console.log(op_ciudad);
          if (
            op_ciudad != "a" &&
            op_ciudad != "b" &&
            op_ciudad != "c" &&
            op_ciudad != "d"
          ) {
            alert("Debe ser una opcion Valida entre A y D");
          } else {
            if (op_ciudad == "a") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Bandeja paisa \nB - Arepas \nC - Mazamorra"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Bandeja Paisa: \nTradicionalmente la Bandeja Paisa incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla.";
                  } else if (op_plato == "b") {
                    receta =
                      "Arepas:\nColoque el agua y una pizca de sal en un tazón; agregue poco a poco la harina y remueva con una cuchara. Espere unos tres minutos hasta que la masa tome un poco de consistencia. Luego amásela vigorosamente hasta que no se pegue de los bordes del envase. No debe quedar ningún grumo.";
                  } else if (op_plato == "c") {
                    receta =
                      "Mazamorra:\nPoner el maíz en remojo la víspera, en 6 tazas de agua. Cocinar en agua durante 2 horas aproximadamente. Raspar la panela finamente con ayuda de un cuchillo de hoja lisa. Incorporar la panela raspada a la olla con el maíz y cocinar durante 15 minutos más.  Añadir la leche hervida (esto evitara que corte con el maíz peto) y una vez que comience a hervir, apagar el fuego y dejar reposar durante 5 minutos y servir. Se puede Decorar con un poco más de panela rallada por encima.";
                  }
                }
              }
            }
            if (op_ciudad == "b") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Sancocho de gallina \nB - Lechona \nC - Hogao"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Sancocho de gallina: \nPlatillo preparado con yuca, plátanos verdes, mazorcas, gallina, costilla, cebolla, tomate verde, cilantro, ajo, comino, pimienta, azafrán y sal.";
                  } else if (op_plato == "b") {
                    receta =
                      "Lechona:\nPlatillo preparado con manteca, cebolla, arveja, papa, arroz blanco, sal, pimienta y cominos.";
                  } else if (op_plato == "c") {
                    receta =
                      "Hogao:\nSalsa preparada con cebolla, mantequilla, queso, chontos, aceite, sal y pimienta.";
                  }
                }
              }
            }
            if (op_ciudad == "c") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Lengua de res en salsa \nB - Asorrete \nC - Chorizo Santarrosano"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Lengua de res en salsa: \nColoca la lengua, mitad de la cebolla picada, ajo, sal y jalapeño en una olla grande. Agrega suficiente agua como para cubrir la lengua por varios centimetros y deja que hierva a fuego alto. Reduce el fuego a medio-bajo, tapa y cocina a fuego lento hasta que se haya ablandado, de 3 a 4 horas.";
                  } else if (op_plato == "b") {
                    receta =
                      "Asorrete:\nLavar, secar y cortar la zanahoria y la habichuela en cubos pequeños. Reservar. Lavar y picar finamente la cebolla. Reservar. Calentar una olla con agua hasta la mitad y cocinar el huevo durante 10 min, retirar el huevo, pelar, cortar en trozos pequeños y reservar. Agregar la zanahoria y la habichuela al agua caliente y cocinar durante 20 segundo o hasta que el color esté más vivo. Retirar y disponer en agua fría. Reservar. Mezclar en un recipiente la carne, las habichuelas, la zanahoria, el huevo, la cebolla, el Sazonador para todo La Gran Cocina, la Pasta de ajo La Gran Cocina, la sal y mezclar hasta combinar todos los ingredientes. Disponer papel vinipel en una superficie plana y extender las tiras de tocineta una sobre otra. Disponer la mezcla de la carne molida sobre uno de los bordes de la tocineta y enrollar firmemente. Ajustar y apretar muy bien. Refrigerar durante 15 minutos. Disponer el asorrete cubieto del vinipel en agua hirviendo y cocinar durante 15 a 20 min, retirar del agua y descartar el vinipel. Reservar. Calentar el asorrete sobre una sartén a fuego medio y dorar por todas partes hasta que la tocineta esté crujiente. Retirar y reservar.";
                  } else if (op_plato == "c") {
                    receta =
                      "Chorizo Santarrosano:\nEl chorizo santarrosano es un embutido que se puede comer cocido, frito y asado, que se elabora artesanalmente en Risaralda. En el tradicional chorizo santarrosano se emplean las mejores carnes del cerdo, picadas a mano, y se agregan cebolla, tomate, ajo, pimienta, comino y otros aliños.";
                  }
                }
              }
            }
            if (op_ciudad == "d") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Sancocho Nudillero \nB - Fiambre \nC - Choripollo"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Sancocho nudillero: \n1. muela el maiz y pacelo por un tamizador agregando la leche suavemente. luego ponga a ervir y agrege las especias .agrege el espesante en este caso la maicena agrege el coco rallado luego bata hasta espezar y sirva";
                  } else if (op_plato == "b") {
                    receta =
                      "Fiambre:\ncocine el arroz con los alinios cocine a parte los tuberculos cocine la carne y guisela luego envuelva todo en hojas de platano y amarre.";
                  } else if (op_plato == "c") {
                    receta =
                      "Choripollo:\nSe corta por un lado los chiles y se les quita la semilla. Poner a hervir los chiles en el agua después se dejan enfriar para quitarles la piel. Se tritura en la batidora con el vinagre los chiles anchos, el chipotle, el ajo, el comino, el clavo, el orégano, la pimienta y caldo de pollo en polvo y se reserva. En una cacerola aparte se pone la carne molida y se añade la mezcla, se revuelve todo muy bien y listo para guisar. Se fríe todo.";
                  }
                }
              }
            }
          }

          console.log("Receta " + receta);
        }
      }
      if (op == "b") {
        let op_ciudad = prompt(
          "Ingrese letra de la Ciudad: \nA - Medellin \nB - Envigado \nC - Itagui \nD - Rionegro"
        );
        if (op_ciudad == null) {
          alert("Debe ingresar algun dato");
        } else {
          op_ciudad = op_ciudad.toLowerCase();
          let receta = "";
          console.log(op_ciudad);
          if (
            op_ciudad != "a" &&
            op_ciudad != "b" &&
            op_ciudad != "c" &&
            op_ciudad != "d"
          ) {
            alert("Debe ser una opcion Valida entre A y D");
          } else {
            if (op_ciudad == "a") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Fríjoles con pezuña \nB - Sancocho antioqueño \nC - La Bandeja Paisa"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Fríjoles con pezuña.: \nDe la media libra de frijoles más los complementos mencionados podemos obtener de 6 a 8 porciones. Lavamos el grano y lo colocamos en una olla grande con la pezuña de cerdo, después de eso, adicionamos suficiente agua. Los hervimos a fuego alto por 2 horas, también podemos pitarlos en la Olla a Presión por una hora. Mezclamos en una sartén los demás ingredientes a excepción de la panela y los sofreímos en aceite vegetal por 15 minutos.";
                  } else if (op_plato == "b") {
                    receta =
                      "Sancocho antioqueño:\nCombina todos los ingredientes para el caldo en una olla. Tapa y cocina a fuego alto hasta que hierva. Añade todos los vegetales cortados en la olla con la carne, teniendo cuidado de no quemarte. Cocina a fuego mediano-alto hasta que los vegetales estén cocidos. Prueba el sancocho y ajusta la sal, si gustas.";
                  } else if (op_plato == "c") {
                    receta =
                      "La Bandeja Paisa:\nTradicionalmente la Bandeja Paisa incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla.";
                  }
                }
              }
            }
            if (op_ciudad == "b") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - LA MORCILLA \nB - EMPANADAS \nC - BUÑUELOS"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "LA MORCILLA: Es un embutido sin carne, relleno principalmente con sangre coagulada, de color semi-oscuro característico. Es un alimento que puede encontrarse en muchos países y del que existen muchas variedades. Su elavoración a estado desde siempre íntimamente unida a la matanza del cerdo, rara vez a otros animales, como pueda ser la vaca o el caballo. ";
                  } else if (op_plato == "b") {
                    receta =
                      "EMPANADAS: Alimento compuesto por una fina masa de pan y levadura, masa quebrada o de hojaldre rellena de cualquier alimento salado o dulce. Las famosas Empanadas Envigadeñas son principalmente caracterizadas por su cantidad limitada de HOGAO, HUEVOS DUROS Y PICADOS, SAL PIMIENTA Y COMINO AL GUSTO entre otros... ";
                  } else if (op_plato == "c") {
                    receta =
                      "BUÑUELOS: Masa de harina que se fríe en abundante aceite, generalmente mezclada con agua, leche, huevo o levadura, diferentes tipos de queso, entre muchos mas. Se caracterizan los buñuelos envigadeños por tener un particular relleno que puede ser dulce o salado por ejemplo arequipe o papa.";
                  }
                }
              }
            }
            if (op_ciudad == "c") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Parva \nB - Pionono \nC - Torta de choclo  "
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Parva: \nEn un bol agregamos las claras de huevo y la pisca de sal después batimos asta que estén a punto de nieve. Después vamos a agregarle la mitad del azúcar pero de a cucharada y en forma de lluvia para que no se nos baje. Entonces echamos una cucharada y batimos así sucesiva mente hasta que ya solo quede la mitad del azúcar en total son 11 cucharadas, al final nos va a quedar la consistencia como un merengue.  Depuse batimos bien las yemas hasta que estas tengan un amarillo pálido, podemos usar las mismas tenazas con las que batimos las claras esto no afecta a la mezcla. Después vamos a incorporarle a las yemas el resto del azúcar, de la misma manera que hicimos con las claras, agregamos una cucharada de azúcar y batimos así sucesiva mente hasta que ya no tengamos azúcar. Después le agregamos la esencia de vainilla y batimos.";
                  } else if (op_plato == "b") {
                    receta =
                      "Piononos:\nPara comenzar, batimos los huevos con el  azúcar y  la miel hasta  lograr un punto letra. Luego, agregamos  la sal y  la esencia de vainilla. Tamizamos la harina e integrar al batido, dentro de la batidora funcionando a baja velocidad. A continuación, colocamos la masa en una placa de 50 por 30 cm. La misma debe estar empapelada y enmantecada en forma prolija y reservada en heladera. Llevamos al horno a una temperatura de 190- 200 ° C  durante 8 a 10 minutos. Retiramos del horno e inmediatamente desmoldamos sobre una rejilla  y cubrimos con la placa. Cuando enfríe retiramos el papel.  En el caso de que horneemos varios piononos, es ideal apilarlos para que mantengan la humedad. Los arrollados se conservan enrollados y envueltos en film plástico, en cambio los piononos se conservan en forma plana.";
                  } else if (op_plato == "c") {
                    receta =
                      "Torta de choclo:\nPrecalienta el horno a 350°C. Engrasa un molde para hornear con la mantequilla y luego enharínalo. Coloca en la licuadora los granos de maíz. Seguidamente, separa los huevos y añade las claras a un recipiente limpio y bate a punto de nieve. Incorpora a la licuadora las yemas, recuerda que debes tener allí, los granos de maíz. Mezcla paulatinamente el azúcar, la harina, sal, bicarbonato, leche y polvo para hornear. Ralla el queso y agregálo. Licúa a punto puré, es decir hasta que tenga una textura suave. Ve incorporando las claras de huevo previamente batidas a la mezcla, vierte esta combinación en el molde que preparaste. Hornea por un tiempo aproximado de 30 minutos. Revisa constantemente hasta que esponje y que la torta de choclo esté firme al tacto. Retira del horno y deja enfriar de 5 a 10 minutos. Sirve caliente o frío según tu sea tu gusto.Porciónala y disfrútala. Puedes decorar esta receta con sencillos granos de maíz tierno en el plato, así darás un toque coqueto y brillarás por la elegancia y sofisticación al momento de presentar la torta de choclo. Como ves, es muy fácil y lleva poco tiempo realizar esta receta de maíz. Disfrútala en compañía de quien más quieras, de seguro se sentirá halagado y gratamente sorprendido.";
                  }
                }
              }
            }
            if (op_ciudad == "d") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Bandeja de pescado cachama \nB - Arepas de yuca \nC - Empanadas de nacuma:"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Bandeja de pescado cachama y/o mojarra : \n1. Abrir las mojarras, limpiarlas y adobarlas por dentro con sal y limón dejándolas así por 5 minutos para que coja sabor. Freírlas en abundante aceite bien caliente durante 15 minutos, bajar el fuego y cocinar hasta que doren por ambos lados. Este plato se puede acompañar con patacones, una buena porción de arroz con coco y una ensalada de tomate y cebolla.";
                  } else if (op_plato == "b") {
                    receta =
                      "Arepas de yuca:\nPelamos y rallamos la yuca. La ponemos en un colador de tela y la lavamos para que pierda parte del almidón, la escurrimos y la ponemos en un bol. Añadimos a la pasta de yuca rallada la yema de huevo, la leche, el queso, las semillas de anís, la mantequilla y sal. Los removemos y mezclamos hasta conseguir una pasta homogénea Hacemos bolitas con la mezcla, del tamaño de una albóndiga que chafaremos ligeramente en la palma de la mano. Freímos las arepitas en abundante aceite. Y retiramos cuando estén doraditas. Tiempo de preparación | 20 minutos Tiempo de cocción | 5 minutos Dificultad | Baja";
                  } else if (op_plato == "c") {
                    receta =
                      "Empanadas de nacuma:\nCon una libra de harina de maíz que ya viene lista para usar, una pizca de sal, color natural y 1 ½ de agua tibia, preparas una masa suave que no quede muy blanda para poder darle forma a las empanadas. Agrega una cucharadita de panela rallada a la mezcla, para darle más color y un toquecito dulce Para aliñar el relleno de las empanadas, nada más rico que un hogao bien sazonado. Pica cebolla larga, ajo, tomate y cebolla de huevo muy finitas y en tu Caldero Original IMUSA sofríelo todo con un poco de sal y una cucharada de aceite. Deja que hierva y separa para mezclarlo con las papas.  En tu olla a presión SecuryPlus agregas unas 10 papas con cáscara. Las dejas durante 15 minutos hasta que estén blandas. Retiras la cáscara y las pisas con la ayuda de un tenedor, que no queden completamente en puré. Una vez pisadas, puedes agregar el hogao y formar el relleno para las empanadas. Separa pequeñas bolitas de masa, aplástalas para armar las arepitas con las que haremos las empanadas. Pon una cucharita con el relleno de papa y dobla a la mitad, formando la tradicional figura. Con la ayuda de los dedos humedecidos en agua, puedes cerrarlas formando moritas para ayudar a que se doren más. Agrega aceite abundante en tu Caldero Original IMUSA y déjalo calentar aproximadamente a 180º durante 4 minutos. Una vez listo, echa las empanadas a freír, dales vuelta y retira apenas doren.¡El toque perfecto se logra dejando calentar bien el aceite! Para completar esta delicia, puedes preparar un guacamole con limón, cebollín o ají tradicional con la ayuda de tu Clic & Mix de IMUSA. Si deseas añadir más sabor, puedes acompañarlas con salsa rosada, de piña o las que tú elijas. ¡A disfrutar!";
                  }
                }
              }
            }
          }

          console.log("Receta " + receta);
        }
      }
      
      if (op == "c") {
        let op_ciudad = prompt(
          "Ingrese letra de la Ciudad: \nA - Bogota \nB - Mosquera \nC - Cajica \nD - Cota"
        );
        if (op_ciudad == null) {
          alert("Debe ingresar algun dato");
        } else {
          op_ciudad = op_ciudad.toLowerCase();
          let receta = "";
          console.log(op_ciudad);
          if (
            op_ciudad != "a" &&
            op_ciudad != "b" &&
            op_ciudad != "c" &&
            op_ciudad != "d"
          ) {
            alert("Debe ser una opcion Valida entre A y D");
          } else {
            if (op_ciudad == "a") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Ajiaco Santafereño. \nB - Tamal. \nC - Chocolate con queso"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Ajiaco Santafereño: \nTradicionalmente la Bandeja Paisa incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla.";
                  } else if (op_plato == "b") {
                    receta =
                    "Tamal:\nColoque el agua y una pizca de sal en un tazón; agregue poco a poco la harina y remueva con una cuchara. Espere unos tres minutos hasta que la masa tome un poco de consistencia. Luego amásela vigorosamente hasta que no se pegue de los bordes del envase. No debe quedar ningún grumo.";
                  } else if (op_plato == "c") {
                    receta =
                      "Chocolate con queso:\nPoner el maíz en remojo la víspera, en 6 tazas de agua. Cocinar en agua durante 2 horas aproximadamente. Raspar la panela finamente con ayuda de un cuchillo de hoja lisa. Incorporar la panela raspada a la olla con el maíz y cocinar durante 15 minutos más.  Añadir la leche hervida (esto evitara que corte con el maíz peto) y una vez que comience a hervir, apagar el fuego y dejar reposar durante 5 minutos y servir. Se puede Decorar con un poco más de panela rallada por encima.";
                  }
                }
              }
            }
            if (op_ciudad == "b") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Gallina criolla \nB - Pelanga Criolla \nC - Puchero"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Gallina criolla: \nPlatillo preparado con yuca, plátanos verdes, mazorcas, gallina, costilla, cebolla, tomate verde, cilantro, ajo, comino, pimienta, azafrán y sal.";
                  } else if (op_plato == "b") {
                    receta =
                      "Pelanga Criolla:\nPlatillo preparado con manteca, cebolla, arveja, papa, arroz blanco, sal, pimienta y cominos.";
                  } else if (op_plato == "c") {
                    receta =
                      "Puchero:\nSalsa preparada con cebolla, mantequilla, queso, chontos, aceite, sal y pimienta.";
                  }
                }
              }
            }
            if (op_ciudad == "c") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Cuchuco de trigo \nB - Mazamorra chiquita \nC - Sobrebarriga al horno"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Cuchuco de trigoa: \nColoca la lengua, mitad de la cebolla picada, ajo, sal y jalapeño en una olla grande. Agrega suficiente agua como para cubrir la lengua por varios centimetros y deja que hierva a fuego alto. Reduce el fuego a medio-bajo, tapa y cocina a fuego lento hasta que se haya ablandado, de 3 a 4 horas.";
                  } else if (op_plato == "b") {
                    receta =
                      "Mazamorra chiquita:\nLavar, secar y cortar la zanahoria y la habichuela en cubos pequeños. Reservar. Lavar y picar finamente la cebolla. Reservar. Calentar una olla con agua hasta la mitad y cocinar el huevo durante 10 min, retirar el huevo, pelar, cortar en trozos pequeños y reservar. Agregar la zanahoria y la habichuela al agua caliente y cocinar durante 20 segundo o hasta que el color esté más vivo. Retirar y disponer en agua fría. Reservar. Mezclar en un recipiente la carne, las habichuelas, la zanahoria, el huevo, la cebolla, el Sazonador para todo La Gran Cocina, la Pasta de ajo La Gran Cocina, la sal y mezclar hasta combinar todos los ingredientes. Disponer papel vinipel en una superficie plana y extender las tiras de tocineta una sobre otra. Disponer la mezcla de la carne molida sobre uno de los bordes de la tocineta y enrollar firmemente. Ajustar y apretar muy bien. Refrigerar durante 15 minutos. Disponer el asorrete cubieto del vinipel en agua hirviendo y cocinar durante 15 a 20 min, retirar del agua y descartar el vinipel. Reservar. Calentar el asorrete sobre una sartén a fuego medio y dorar por todas partes hasta que la tocineta esté crujiente. Retirar y reservar.";
                  } else if (op_plato == "c") {
                    receta =
                      "Sobrebarriga al horno:\nEl chorizo santarrosano es un embutido que se puede comer cocido, frito y asado, que se elabora artesanalmente en Risaralda. En el tradicional chorizo santarrosano se emplean las mejores carnes del cerdo, picadas a mano, y se agregan cebolla, tomate, ajo, pimienta, comino y otros aliños.";
                  }
                }
              }
            }
            if (op_ciudad == "d") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Guarapo \nB - Fritanga \nC - Ajiaco"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Guarapo: \n1. muela el maiz y pacelo por un tamizador agregando la leche suavemente. luego ponga a ervir y agrege las especias .agrege el espesante en este caso la maicena agrege el coco rallado luego bata hasta espezar y sirva";
                  } else if (op_plato == "b") {
                    receta =
                      "Fritanga:\ncocine el arroz con los alinios cocine a parte los tuberculos cocine la carne y guisela luego envuelva todo en hojas de platano y amarre.";
                  } else if (op_plato == "c") {
                    receta =
                      "Ajiaco:\nSe corta por un lado los chiles y se les quita la semilla. Poner a hervir los chiles en el agua después se dejan enfriar para quitarles la piel. Se tritura en la batidora con el vinagre los chiles anchos, el chipotle, el ajo, el comino, el clavo, el orégano, la pimienta y caldo de pollo en polvo y se reserva. En una cacerola aparte se pone la carne molida y se añade la mezcla, se revuelve todo muy bien y listo para guisar. Se fríe todo.";
                  }
                }
              }
            }
          }

          console.log("Receta " + receta);
        }
      }
      
      if (op == "d") {
        let op_ciudad = prompt(
          "Ingrese letra de la Ciudad: \nA - Cali \nB - Buga \nC - Palmira \nD - Cartago"
        );
        if (op_ciudad == null) {
          alert("Debe ingresar algun dato");
        } else {
          op_ciudad = op_ciudad.toLowerCase();
          let receta = "";
          console.log(op_ciudad);
          if (
            op_ciudad != "a" &&
            op_ciudad != "b" &&
            op_ciudad != "c" &&
            op_ciudad != "d"
          ) {
            alert("Debe ser una opcion Valida entre A y D");
          } else {
            if (op_ciudad == "a") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Aborrajado \nB - Chuleta Valluna \nC - Cortado"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Aborrajado: \nTradicionalmente la Bandeja Paisa incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla.";
                  } else if (op_plato == "b") {
                    receta =
                    "Chuleta Valluna:\nColoque el agua y una pizca de sal en un tazón; agregue poco a poco la harina y remueva con una cuchara. Espere unos tres minutos hasta que la masa tome un poco de consistencia. Luego amásela vigorosamente hasta que no se pegue de los bordes del envase. No debe quedar ningún grumo.";
                  } else if (op_plato == "c") {
                    receta =
                      "Cortado:\nPoner el maíz en remojo la víspera, en 6 tazas de agua. Cocinar en agua durante 2 horas aproximadamente. Raspar la panela finamente con ayuda de un cuchillo de hoja lisa. Incorporar la panela raspada a la olla con el maíz y cocinar durante 15 minutos más.  Añadir la leche hervida (esto evitara que corte con el maíz peto) y una vez que comience a hervir, apagar el fuego y dejar reposar durante 5 minutos y servir. Se puede Decorar con un poco más de panela rallada por encima.";
                  }
                }
              }
            }
            if (op_ciudad == "b") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Gallina criolla \nB - Pelanga Criolla \nC - Puchero"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Gallina criolla: \nPlatillo preparado con yuca, plátanos verdes, mazorcas, gallina, costilla, cebolla, tomate verde, cilantro, ajo, comino, pimienta, azafrán y sal.";
                  } else if (op_plato == "b") {
                    receta =
                      "Pelanga Criolla:\nPlatillo preparado con manteca, cebolla, arveja, papa, arroz blanco, sal, pimienta y cominos.";
                  } else if (op_plato == "c") {
                    receta =
                      "Puchero:\nSalsa preparada con cebolla, mantequilla, queso, chontos, aceite, sal y pimienta.";
                  }
                }
              }
            }
            if (op_ciudad == "c") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Cuchuco de trigo \nB - Mazamorra chiquita \nC - Sobrebarriga al horno"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Cuchuco de trigoa: \nColoca la lengua, mitad de la cebolla picada, ajo, sal y jalapeño en una olla grande. Agrega suficiente agua como para cubrir la lengua por varios centimetros y deja que hierva a fuego alto. Reduce el fuego a medio-bajo, tapa y cocina a fuego lento hasta que se haya ablandado, de 3 a 4 horas.";
                  } else if (op_plato == "b") {
                    receta =
                      "Mazamorra chiquita:\nLavar, secar y cortar la zanahoria y la habichuela en cubos pequeños. Reservar. Lavar y picar finamente la cebolla. Reservar. Calentar una olla con agua hasta la mitad y cocinar el huevo durante 10 min, retirar el huevo, pelar, cortar en trozos pequeños y reservar. Agregar la zanahoria y la habichuela al agua caliente y cocinar durante 20 segundo o hasta que el color esté más vivo. Retirar y disponer en agua fría. Reservar. Mezclar en un recipiente la carne, las habichuelas, la zanahoria, el huevo, la cebolla, el Sazonador para todo La Gran Cocina, la Pasta de ajo La Gran Cocina, la sal y mezclar hasta combinar todos los ingredientes. Disponer papel vinipel en una superficie plana y extender las tiras de tocineta una sobre otra. Disponer la mezcla de la carne molida sobre uno de los bordes de la tocineta y enrollar firmemente. Ajustar y apretar muy bien. Refrigerar durante 15 minutos. Disponer el asorrete cubieto del vinipel en agua hirviendo y cocinar durante 15 a 20 min, retirar del agua y descartar el vinipel. Reservar. Calentar el asorrete sobre una sartén a fuego medio y dorar por todas partes hasta que la tocineta esté crujiente. Retirar y reservar.";
                  } else if (op_plato == "c") {
                    receta =
                      "Sobrebarriga al horno:\nEl chorizo santarrosano es un embutido que se puede comer cocido, frito y asado, que se elabora artesanalmente en Risaralda. En el tradicional chorizo santarrosano se emplean las mejores carnes del cerdo, picadas a mano, y se agregan cebolla, tomate, ajo, pimienta, comino y otros aliños.";
                  }
                }
              }
            }
            if (op_ciudad == "d") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Guarapo \nB - Fritanga \nC - Ajiaco"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Guarapo: \n1. muela el maiz y pacelo por un tamizador agregando la leche suavemente. luego ponga a ervir y agrege las especias .agrege el espesante en este caso la maicena agrege el coco rallado luego bata hasta espezar y sirva";
                  } else if (op_plato == "b") {
                    receta =
                      "Fritanga:\ncocine el arroz con los alinios cocine a parte los tuberculos cocine la carne y guisela luego envuelva todo en hojas de platano y amarre.";
                  } else if (op_plato == "c") {
                    receta =
                      "Ajiaco:\nSe corta por un lado los chiles y se les quita la semilla. Poner a hervir los chiles en el agua después se dejan enfriar para quitarles la piel. Se tritura en la batidora con el vinagre los chiles anchos, el chipotle, el ajo, el comino, el clavo, el orégano, la pimienta y caldo de pollo en polvo y se reserva. En una cacerola aparte se pone la carne molida y se añade la mezcla, se revuelve todo muy bien y listo para guisar. Se fríe todo.";
                  }
                }
              }
            }
          }

          console.log("Receta " + receta);
        }
      }
      if (op == "e") {
        let op_ciudad = prompt(
          "Ingrese letra de la Ciudad: \nA - Pereira \nB - Dos Quebradas \nC - Marsella \nD - Apia"
        );
        if (op_ciudad == null) {
          alert("Debe ingresar algun dato");
        } else {
          op_ciudad = op_ciudad.toLowerCase();
          let receta = "";
          console.log(op_ciudad);
          if (
            op_ciudad != "a" &&
            op_ciudad != "b" &&
            op_ciudad != "c" &&
            op_ciudad != "d"
          ) {
            alert("Debe ser una opcion Valida entre A y D");
          } else {
            if (op_ciudad == "a") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Fríjoles con pezuña \nB - Sancocho antioqueño \nC - La Bandeja Paisa"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Fríjoles con pezuña.: \nDe la media libra de frijoles más los complementos mencionados podemos obtener de 6 a 8 porciones. Lavamos el grano y lo colocamos en una olla grande con la pezuña de cerdo, después de eso, adicionamos suficiente agua. Los hervimos a fuego alto por 2 horas, también podemos pitarlos en la Olla a Presión por una hora. Mezclamos en una sartén los demás ingredientes a excepción de la panela y los sofreímos en aceite vegetal por 15 minutos.";
                  } else if (op_plato == "b") {
                    receta =
                      "Sancocho antioqueño:\nCombina todos los ingredientes para el caldo en una olla. Tapa y cocina a fuego alto hasta que hierva. Añade todos los vegetales cortados en la olla con la carne, teniendo cuidado de no quemarte. Cocina a fuego mediano-alto hasta que los vegetales estén cocidos. Prueba el sancocho y ajusta la sal, si gustas.";
                  } else if (op_plato == "c") {
                    receta =
                      "La Bandeja Paisa:\nTradicionalmente la Bandeja Paisa incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla.";
                  }
                }
              }
            }
            if (op_ciudad == "b") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - LA MORCILLA \nB - EMPANADAS \nC - BUÑUELOS"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "LA MORCILLA: Es un embutido sin carne, relleno principalmente con sangre coagulada, de color semi-oscuro característico. Es un alimento que puede encontrarse en muchos países y del que existen muchas variedades. Su elavoración a estado desde siempre íntimamente unida a la matanza del cerdo, rara vez a otros animales, como pueda ser la vaca o el caballo. ";
                  } else if (op_plato == "b") {
                    receta =
                      "EMPANADAS: Alimento compuesto por una fina masa de pan y levadura, masa quebrada o de hojaldre rellena de cualquier alimento salado o dulce. Las famosas Empanadas Envigadeñas son principalmente caracterizadas por su cantidad limitada de HOGAO, HUEVOS DUROS Y PICADOS, SAL PIMIENTA Y COMINO AL GUSTO entre otros... ";
                  } else if (op_plato == "c") {
                    receta =
                      "BUÑUELOS: Masa de harina que se fríe en abundante aceite, generalmente mezclada con agua, leche, huevo o levadura, diferentes tipos de queso, entre muchos mas. Se caracterizan los buñuelos envigadeños por tener un particular relleno que puede ser dulce o salado por ejemplo arequipe o papa.";
                  }
                }
              }
            }
            if (op_ciudad == "c") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Parva \nB - Pionono \nC - Torta de choclo  "
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Parva: \nEn un bol agregamos las claras de huevo y la pisca de sal después batimos asta que estén a punto de nieve. Después vamos a agregarle la mitad del azúcar pero de a cucharada y en forma de lluvia para que no se nos baje. Entonces echamos una cucharada y batimos así sucesiva mente hasta que ya solo quede la mitad del azúcar en total son 11 cucharadas, al final nos va a quedar la consistencia como un merengue.  Depuse batimos bien las yemas hasta que estas tengan un amarillo pálido, podemos usar las mismas tenazas con las que batimos las claras esto no afecta a la mezcla. Después vamos a incorporarle a las yemas el resto del azúcar, de la misma manera que hicimos con las claras, agregamos una cucharada de azúcar y batimos así sucesiva mente hasta que ya no tengamos azúcar. Después le agregamos la esencia de vainilla y batimos.";
                  } else if (op_plato == "b") {
                    receta =
                      "Piononos:\nPara comenzar, batimos los huevos con el  azúcar y  la miel hasta  lograr un punto letra. Luego, agregamos  la sal y  la esencia de vainilla. Tamizamos la harina e integrar al batido, dentro de la batidora funcionando a baja velocidad. A continuación, colocamos la masa en una placa de 50 por 30 cm. La misma debe estar empapelada y enmantecada en forma prolija y reservada en heladera. Llevamos al horno a una temperatura de 190- 200 ° C  durante 8 a 10 minutos. Retiramos del horno e inmediatamente desmoldamos sobre una rejilla  y cubrimos con la placa. Cuando enfríe retiramos el papel.  En el caso de que horneemos varios piononos, es ideal apilarlos para que mantengan la humedad. Los arrollados se conservan enrollados y envueltos en film plástico, en cambio los piononos se conservan en forma plana.";
                  } else if (op_plato == "c") {
                    receta =
                      "Torta de choclo:\nPrecalienta el horno a 350°C. Engrasa un molde para hornear con la mantequilla y luego enharínalo. Coloca en la licuadora los granos de maíz. Seguidamente, separa los huevos y añade las claras a un recipiente limpio y bate a punto de nieve. Incorpora a la licuadora las yemas, recuerda que debes tener allí, los granos de maíz. Mezcla paulatinamente el azúcar, la harina, sal, bicarbonato, leche y polvo para hornear. Ralla el queso y agregálo. Licúa a punto puré, es decir hasta que tenga una textura suave. Ve incorporando las claras de huevo previamente batidas a la mezcla, vierte esta combinación en el molde que preparaste. Hornea por un tiempo aproximado de 30 minutos. Revisa constantemente hasta que esponje y que la torta de choclo esté firme al tacto. Retira del horno y deja enfriar de 5 a 10 minutos. Sirve caliente o frío según tu sea tu gusto.Porciónala y disfrútala. Puedes decorar esta receta con sencillos granos de maíz tierno en el plato, así darás un toque coqueto y brillarás por la elegancia y sofisticación al momento de presentar la torta de choclo. Como ves, es muy fácil y lleva poco tiempo realizar esta receta de maíz. Disfrútala en compañía de quien más quieras, de seguro se sentirá halagado y gratamente sorprendido.";
                  }
                }
              }
            }
            if (op_ciudad == "d") {
              let op_plato = prompt(
                "Ingrese letra del plato : \nA - Bandeja de pescado cachama \nB - Arepas de yuca \nC - Empanadas de nacuma:"
              );
              if (op_plato == null) {
                alert("Debe ingresar algun dato");
              } else {
                op_plato = op_plato.toLowerCase();
                console.log(op_plato);
                if (op_plato != "a" && op_plato != "b" && op_plato != "c") {
                  alert("Debe ser una opcion Valida entre A y D");
                } else {
                  if (op_plato == "a") {
                    receta =
                      "Bandeja de pescado cachama y/o mojarra : \n1. Abrir las mojarras, limpiarlas y adobarlas por dentro con sal y limón dejándolas así por 5 minutos para que coja sabor. Freírlas en abundante aceite bien caliente durante 15 minutos, bajar el fuego y cocinar hasta que doren por ambos lados. Este plato se puede acompañar con patacones, una buena porción de arroz con coco y una ensalada de tomate y cebolla.";
                  } else if (op_plato == "b") {
                    receta =
                      "Arepas de yuca:\nPelamos y rallamos la yuca. La ponemos en un colador de tela y la lavamos para que pierda parte del almidón, la escurrimos y la ponemos en un bol. Añadimos a la pasta de yuca rallada la yema de huevo, la leche, el queso, las semillas de anís, la mantequilla y sal. Los removemos y mezclamos hasta conseguir una pasta homogénea Hacemos bolitas con la mezcla, del tamaño de una albóndiga que chafaremos ligeramente en la palma de la mano. Freímos las arepitas en abundante aceite. Y retiramos cuando estén doraditas. Tiempo de preparación | 20 minutos Tiempo de cocción | 5 minutos Dificultad | Baja";
                  } else if (op_plato == "c") {
                    receta =
                      "Empanadas de nacuma:\nCon una libra de harina de maíz que ya viene lista para usar, una pizca de sal, color natural y 1 ½ de agua tibia, preparas una masa suave que no quede muy blanda para poder darle forma a las empanadas. Agrega una cucharadita de panela rallada a la mezcla, para darle más color y un toquecito dulce Para aliñar el relleno de las empanadas, nada más rico que un hogao bien sazonado. Pica cebolla larga, ajo, tomate y cebolla de huevo muy finitas y en tu Caldero Original IMUSA sofríelo todo con un poco de sal y una cucharada de aceite. Deja que hierva y separa para mezclarlo con las papas.  En tu olla a presión SecuryPlus agregas unas 10 papas con cáscara. Las dejas durante 15 minutos hasta que estén blandas. Retiras la cáscara y las pisas con la ayuda de un tenedor, que no queden completamente en puré. Una vez pisadas, puedes agregar el hogao y formar el relleno para las empanadas. Separa pequeñas bolitas de masa, aplástalas para armar las arepitas con las que haremos las empanadas. Pon una cucharita con el relleno de papa y dobla a la mitad, formando la tradicional figura. Con la ayuda de los dedos humedecidos en agua, puedes cerrarlas formando moritas para ayudar a que se doren más. Agrega aceite abundante en tu Caldero Original IMUSA y déjalo calentar aproximadamente a 180º durante 4 minutos. Una vez listo, echa las empanadas a freír, dales vuelta y retira apenas doren.¡El toque perfecto se logra dejando calentar bien el aceite! Para completar esta delicia, puedes preparar un guacamole con limón, cebollín o ají tradicional con la ayuda de tu Clic & Mix de IMUSA. Si deseas añadir más sabor, puedes acompañarlas con salsa rosada, de piña o las que tú elijas. ¡A disfrutar!";
                  }
                }
              }
            }
          }

          console.log("Receta " + receta);
        }
      }
    }
  }
};




