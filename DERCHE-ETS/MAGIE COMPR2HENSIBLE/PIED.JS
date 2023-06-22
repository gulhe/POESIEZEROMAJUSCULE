const DEV = ``/*NON PUTAIN
SI TU LIS 9A BAH C4EST QUE C4EST PAS EN DEV
GROS·SE NAZE
SINON LA VALEUR CE SERAIT UN TRUC GENRE
`VRAI PUTAIN JE SUIS EN TRAIN DE DEV ET 9A ME CASSE LES COUILLES`
*/;

window.onload = (EVENT) => {
    if (DEV) {
        document.title=`ON EST EN DEV
PARCE QUE LE DEV EST UNE TËTE DE NŒUD QUI SAIT PAS CODER
ET QU4IL TEST EN PROD COMME UN SAC 0 MERDE
MAIS SI VOUS ËTES PAS CONTENT·E·S BAH C4EST LE MËME PRIX VU QUE C4EST UN PUTAIN DE PROJET OPEN SOURCE
ET QUE PERSONNE ME PAYE POUR LE FAIRE
D4AILLEURS LE DEV A TROUV2 TR7S MALIN DE METTRE SA VARIABLE 0
"${JSON.stringify({DEV})}" (QUEL BRANLEUR)`

        const CASE0COCHER = document.createElement(`INPUT`);
        CASE0COCHER.setAttribute("TYPE", "CHECKBOX");
        CASE0COCHER.setAttribute("CHECKED", "TRUE");
        document.body.appendChild(CASE0COCHER);
        CASE0COCHER.style.position = `absolute`;
        CASE0COCHER.style.bottom = `0`;
        CASE0COCHER.style.left = `0`;
        setInterval(() => {
            if (CASE0COCHER.checked) {
                location.reload();
            }
        }, 1000)
    }

    const LESCORRESPONDANCESTRI2ES = {
        LESLETTRES: {
            "é": `2`,
            "è": `7`,
            "ç": `9`,
            "à": `0`,
            "ù": `%`,
            "â": `ä`,
            "ê": `ë`,
            "î": `ï`,
            "ô": `ö`,
            "û": `ü`,
            "ŷ": `ÿ`
        },
        PONCTUATIONSIDIOMATIQUES: {
            "'": `4` /*ET OUAIS Y4A QUE CELLE L0 */
        }
    }

    const EMPILERDESDICTIONNAIRES = (...DICTIONNAIRES) => Object.assign({}, ...DICTIONNAIRES)
    const CORRIGER = (BLAHBLAHDEMERDE) => {
        return BLAHBLAHDEMERDE.toLocaleLowerCase(`FR`)
            .split(``)
            .map(LETTRE0LACON => EMPILERDESDICTIONNAIRES(...Object.values(LESCORRESPONDANCESTRI2ES))[LETTRE0LACON] ?? LETTRE0LACON)
            .join(``)
            .toLocaleUpperCase(`FR`)
    };
    let SOURCE = document.getElementById(`SOURCE`);
    SOURCE.addEventListener(
        `input`,
        ({target: {value: CONTENU}}) => document.getElementById(`TRAD`).value = CORRIGER(CONTENU)
    );

};
