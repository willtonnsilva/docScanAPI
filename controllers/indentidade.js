module.exports = function(app){ 
    app.post("/indentidade", function(req, res){
        var indentidade = req.body;

        req.assert("rg", "RG não pode ser vazio.").notEmpty();
        req.assert("expedicao_data", "Expedição data não pode ser vazio e data").notEmpty();
        req.assert("nasci_dat", "Data de nascimento tem que ser data e não vazio").notEmpty();
        req.assert("filiacao_pai", "Filiação pai não pode ser vazio").notEmpty();
        req.assert("filiacao_mae", "Filiação mãe não pode ser vazio").notEmpty();
        req.assert("naturalidade", "Naturalidade não pode ser vazio").notEmpty();

        var errors = req.validationErrors();

        if (errors){
          console.log("Erros de validação encontrados");
          res.status(400).send(errors);
          return;
        }

        console.log(indentidade);
        res.status(200).send(indentidade);
    });
}