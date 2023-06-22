window.onload = (EVENT) => {

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
