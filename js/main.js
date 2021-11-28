fetch("data/img.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (const keys in data) {
            console.log(keys);

            const main = document.getElementById("main");
            main.innerHTML += '\
            <div id="image" class="col-9 col-sm-4 text-white my-2">\
                <a href=' + data[keys].url + '><img src=' + data[keys].path + ' class="card-img" alt="...">\
                    <div class="card-img">\
                        <h5 class="card-title"></h5><p class="card-text"></p><p class="card-text"></p>\
                    </div>\
                </a>\
            </div>'
        }
    });
