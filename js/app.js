document.addEventListener("DOMContentLoaded", () => {


    let footer_p = document.querySelector("footer p");
    footer_p.innerHTML += "&copy; " + new Date().getFullYear() + " -  Alexmi94"
/*
    if (screen && screen.width < 480) {
        
      }
*/

    const logiciels = document.getElementsByClassName("logiciels");
    const details_graphismes = document.getElementsByClassName("graphismes");
    const dessins = document.getElementsByClassName("dessins");
    const christmas_decorations_2017 = document.getElementsByClassName("christmas_decorations_2017");
    const christmas_decorations_2018 = document.getElementsByClassName("christmas_decorations_2018");
    const christmas_decorations_2019 = document.getElementsByClassName("christmas_decorations_2019");
    const christmas_decorations_2020 = document.getElementsByClassName("christmas_decorations_2020");
    const halloween_decorations_2020 = document.getElementsByClassName("halloween_decorations_2020");
    const illuminate_10_years = document.getElementsByClassName("illuminate_10_years");
    const the_mouse_party_show = document.getElementsByClassName("the_mouse_party_show");
    const chateau_de_la_belle_au_bois_dormant = document.getElementsByClassName("chateau_de_la_belle_au_bois_dormant");

    logiciels[0].addEventListener('toggle', function() {
        if(logiciels[0].open){
            const image = logiciels[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Compétences/Logiciels/1.png" alt="Logiciel"></li>
            <li><img src="./asset/Compétences/Logiciels/2.png" alt="Logiciel"></li>
            <li><img src="./asset/Compétences/Logiciels/3.png" alt="Logiciel"></li>
        </ul>`
        }
    })


    details_graphismes[0].addEventListener('toggle', function() {
        if(details_graphismes[0].open){
            const image = details_graphismes[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Compétences/Graphismes/Logos/1.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/2.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/3.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/4.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/5.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/6.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/7.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/8.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/9.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/10.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/11.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/12.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/13.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/14.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/15.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/16.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/17.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/18.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/19.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/21.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/22.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/23.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/24.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/25.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/26.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/27.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/28.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/29.png" alt="Logo"></li>
            <li><img src="./asset/Compétences/Graphismes/Logos/30.png" alt="Logo"></li>

        </ul`;
            image[1].innerHTML = `<ul>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/1.png" alt="Graphisme" class="displaylogo"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/2.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/3.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/4.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/5.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/6.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/7.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/8.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Casting_en_Folie/9.png" alt="Graphisme"></li>
        
        </ul>`;
            image[2].innerHTML = `<ul>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Pâques_&_CO/1.png" alt="Graphisme" class="displaylogo"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Pâques_&_CO/2.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Pâques_&_CO/3.png" alt="Graphisme"></li>
            <li><img src="./asset/Compétences/Graphismes/Série_Graphique_Pâques_&_CO/4.png" alt="Graphisme"></li>
                          
        </ul>`;
    }
    })

    dessins[0].addEventListener('toggle', function() {
        if(dessins[0].open){
            const image = dessins[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Compétences/Dessins/1.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Compétences/Dessins/2.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Compétences/Dessins/3.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Compétences/Dessins/4.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Compétences/Dessins/5.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Compétences/Dessins/6.png" alt="Christmas Decoration 2017"></li>
        </ul>`;
        }
    })

    christmas_decorations_2017[0].addEventListener('toggle', function() {
        if(christmas_decorations_2017[0].open){
            const image = christmas_decorations_2017[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Christmas_Decorations/2017/1.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Christmas_Decorations/2017/2.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Christmas_Decorations/2017/3.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Christmas_Decorations/2017/4.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Christmas_Decorations/2017/5.png" alt="Christmas Decoration 2017"></li>
            <li><img src="./asset/Christmas_Decorations/2017/6.png" alt="Christmas Decoration 2017"></li>
        </ul>`;
            const title_image = christmas_decorations_2017[0].getElementsByClassName("titresectionimage");
            title_image[0].innerHTML = `<img src="./asset/Christmas_Decorations/2017/Logo_2017.png" alt="Christmas Decoration 2017">`;
        }
    })

    christmas_decorations_2018[0].addEventListener('toggle', function() {
        if(christmas_decorations_2018[0].open){
            const image = christmas_decorations_2018[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Christmas_Decorations/2018/1.png" alt="Christmas Decoration 2018"></li>
            <li><img src="./asset/Christmas_Decorations/2018/2.png" alt="Christmas Decoration 2018"></li>
            <li><img src="./asset/Christmas_Decorations/2018/3.png" alt="Christmas Decoration 2018"></li>
            <li><img src="./asset/Christmas_Decorations/2018/4.png" alt="Christmas Decoration 2018"></li>
            <li><img src="./asset/Christmas_Decorations/2018/5.png" alt="Christmas Decoration 2018"></li>
            <li><img src="./asset/Christmas_Decorations/2018/6.png" alt="Christmas Decoration 2018"></li>
        </ul>`;
        const title_image = christmas_decorations_2018[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Christmas_Decorations/2018/Logo_2018.png" alt="Christmas Decoration 2018">`;
        }
    })

    christmas_decorations_2019[0].addEventListener('toggle', function() {
        if(christmas_decorations_2019[0].open){
            const image = christmas_decorations_2019[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Christmas_Decorations/2019/1.png" alt="Christmas Decoration 2019"></li>
            <li><img src="./asset/Christmas_Decorations/2019/2.png" alt="Christmas Decoration 2019"></li>
            <li><img src="./asset/Christmas_Decorations/2019/3.png" alt="Christmas Decoration 2019"></li>
            <li><img src="./asset/Christmas_Decorations/2019/4.png" alt="Christmas Decoration 2019"></li>
            <li><img src="./asset/Christmas_Decorations/2019/5.png" alt="Christmas Decoration 2019"></li>
            <li><img src="./asset/Christmas_Decorations/2019/6.png" alt="Christmas Decoration 2019"></li>
        </ul>`;
        const title_image = christmas_decorations_2019[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Christmas_Decorations/2019/Logo_2019.png" alt="Christmas Decoration 2019">`;

        }
    })

    christmas_decorations_2020[0].addEventListener('toggle', function() {
        if(christmas_decorations_2020[0].open){
            const image = christmas_decorations_2020[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Christmas_Decorations/2020/1.png" alt="Christmas Decoration 2020"></li>
            <li><img src="./asset/Christmas_Decorations/2020/2.png" alt="Christmas Decoration 2020"></li>
            <li><img src="./asset/Christmas_Decorations/2020/3.png" alt="Christmas Decoration 2020"></li>
            <li><img src="./asset/Christmas_Decorations/2020/4.png" alt="Christmas Decoration 2020"></li>
            <li><img src="./asset/Christmas_Decorations/2020/5.png" alt="Christmas Decoration 2020"></li>
            <li><img src="./asset/Christmas_Decorations/2020/6.png" alt="Christmas Decoration 2020"></li>
        </ul>`;
        const title_image = christmas_decorations_2020[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Christmas_Decorations/2020/Logo_2020.png" alt="Christmas Decoration 2020">`;
        }
    })

    halloween_decorations_2020[0].addEventListener('toggle', function() {
        if(halloween_decorations_2020[0].open){
            const image = halloween_decorations_2020[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Halloween_Decorations/2020/1.png" alt="Halloween Decoration 2020"></li>
            <li><img src="./asset/Halloween_Decorations/2020/2.png" alt="Halloween Decoration 2020"></li>
            <li><img src="./asset/Halloween_Decorations/2020/3.png" alt="Halloween Decoration 2020"></li>
            <li><img src="./asset/Halloween_Decorations/2020/4.png" alt="Halloween Decoration 2020"></li>
            <li><img src="./asset/Halloween_Decorations/2020/5.png" alt="Halloween Decoration 2020"></li>
            <li><img src="./asset/Halloween_Decorations/2020/6.png" alt="Halloween Decoration 2020"></li>
        </ul>`;
        const title_image = halloween_decorations_2020[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Halloween_Decorations/2020/Logo_2020.png" alt="Halloween Decoration 2020">`;
        }
    })

    illuminate_10_years[0].addEventListener('toggle', function() {
        if(illuminate_10_years[0].open){
            const image = illuminate_10_years[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Spectacles/Illuminate_10_Years/1.png" alt="Illuminate 10 Years !"></li>
            <li><img src="./asset/Spectacles/Illuminate_10_Years/2.png" alt="Illuminate 10 Years !"></li>
            <li><img src="./asset/Spectacles/Illuminate_10_Years/3.png" alt="Illuminate 10 Years !"></li>
            <li><img src="./asset/Spectacles/Illuminate_10_Years/4.png" alt="Illuminate 10 Years !"></li>
            <li><img src="./asset/Spectacles/Illuminate_10_Years/5.png" alt="Illuminate 10 Years !"></li>
            <li><img src="./asset/Spectacles/Illuminate_10_Years/6.png" alt="Illuminate 10 Years !"></li>
        </ul>`;
        const title_image = illuminate_10_years[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Spectacles/Illuminate_10_Years/Logo.png" alt="Illuminate 10 Years !">`;
        }
    })

    the_mouse_party_show[0].addEventListener('toggle', function() {
        if(the_mouse_party_show[0].open){
            const image = the_mouse_party_show[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Spectacles/The_Mouse_Party_Show/1.png" alt="The Mouse Party Show"></li>
            <li><img src="./asset/Spectacles/The_Mouse_Party_Show/2.png" alt="The Mouse Party Show"></li>
            <li><img src="./asset/Spectacles/The_Mouse_Party_Show/3.png" alt="The Mouse Party Show"></li>
            <li><img src="./asset/Spectacles/The_Mouse_Party_Show/4.png" alt="The Mouse Party Show"></li>
            <li><img src="./asset/Spectacles/The_Mouse_Party_Show/5.png" alt="The Mouse Party Show"></li>
            <li><img src="./asset/Spectacles/The_Mouse_Party_Show/6.png" alt="The Mouse Party Show"></li>
        </ul>`;
        const title_image = the_mouse_party_show[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Spectacles/The_Mouse_Party_Show/Logo.png" alt="The Mouse Party Show">`;
        }
    })

    chateau_de_la_belle_au_bois_dormant[0].addEventListener('toggle', function() {
        if(chateau_de_la_belle_au_bois_dormant[0].open){
            const image = chateau_de_la_belle_au_bois_dormant[0].getElementsByClassName("listimage");
            image[0].innerHTML = `<ul>
            <li><img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/1.png" alt="Maquette du Château de la Belle au Bois Dormant"></li>
            <li><img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/2.png" alt="Maquette du Château de la Belle au Bois Dormant"></li>
            <li><img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/3.png" alt="Maquette du Château de la Belle au Bois Dormant"></li>
            <li><img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/4.png" alt="Maquette du Château de la Belle au Bois Dormant"></li>
            <li><img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/5.png" alt="Maquette du Château de la Belle au Bois Dormant"></li>
            <li><img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/6.png" alt="Maquette du Château de la Belle au Bois Dormant"></li>
        </ul>`;
        const title_image = chateau_de_la_belle_au_bois_dormant[0].getElementsByClassName("titresectionimage");
        title_image[0].innerHTML = `<img src="./asset/Maquette/Chateau_de_la_Belle_au_Bois_Dormant/Logo.png" alt="Maquette du Château de la Belle au Bois Dormant">`;
        }
    })

});