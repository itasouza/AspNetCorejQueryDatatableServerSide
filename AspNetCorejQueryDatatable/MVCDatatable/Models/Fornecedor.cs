﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCDatatable.Models
{
    public class Fornecedor
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public bool Status { get; set; }
    }
}