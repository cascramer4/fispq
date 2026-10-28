// Base de Dados Oficial: Catálogo Completo de Produtos Químicos com FDS (16 Seções), Imagens e Links Diretos para o Google Drive
const PRODUCTS_DATA = [
  {
    id: "prod-azolla-zs68",
    nome: "Óleo Hidráulico Antidesgaste",
    nomeComercial: "AZOLLA ZS 68",
    fabricante: "TotalEnergies",
    imagem: "img/azolla_zs_68.jpg",
    driveUrl: "https://drive.google.com/file/d/1cW2heHhJA00Fn4GU-3PJv2VYnYajQHJu/view?usp=sharing",
    categoria: "oleos",
    categoriaLabel: "Óleos Hidráulicos & Motores",
    formula: "Óleos básicos minerais refinados com aditivos antidesgaste (ISO VG 68)",
    cas: "64742-54-7",
    riscoGeral: "Risco Moderado",
    corRisco: "warning",
    descricao: "Óleo lubrificante de alta performance para circuitos hidráulicos de perfuratrizes, guindastes e centrais de perfuração sob severas condições de pressão.",
    pictogramas: ["health"],
    palavraAdvertencia: "CUIDADO",
    frasesPerigo: [
      "H304 - Pode ser mortal se ingerido e penetrar nas vias respiratórias por aspiração",
      "Atenção com injeção sob alta pressão na pele através de micro-furos em mangueiras hidráulicas"
    ],
    episRecomendados: ["Luvas de Nitrila Resistentes a Óleos", "Óculos de Proteção Ampla Visão", "Botas de Segurança Hidrofugadas", "Uniforme com Manga Longa"],
    emergenciaResumo: {
      olhos: "Lavar imediatamente com água corrente durante pelo menos 15 minutos.",
      pele: "Lavar a pele com água e sabão. ATENÇÃO: se houver injeção de óleo sob alta pressão na pele, procurar cirurgião com urgência!",
      inalacao: "Remover a vítima para local arejado e fresco.",
      ingestao: "NUNCA INDUZIR VÔMITO (risco de aspiração pulmonar com pneumonia química). Beber água e chamar médico.",
      incendio: "Usar pó químico ABC, espuma para hidrocarbonetos ou CO2. Não usar jato direto de água.",
      vazamento: "Conter o derrame com mantas absorventes ou serragem. Evitar que atinja galerias pluviais ou cursos d'água."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e do Fabricante",
        conteudo: "<strong>Produto:</strong> TOTAL AZOLLA ZS 68<br><strong>Fabricante:</strong> TotalEnergies Lubrificantes do Brasil<br><strong>Aplicação:</strong> Sistemas hidráulicos que operam sob alta pressão e temperaturas elevadas em equipamentos de fundação."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Perigo por aspiração pulmonar - Categoria 1 (H304). O contato sob altíssima pressão hidráulica pode penetrar tecidos subcutâneos exigindo desbridamento cirúrgico de emergência."
      },
      secao3: {
        titulo: "3. Composição e Ingredientes",
        conteudo: "Destilados parafínicos pesados hidrorrefinados (petróleo) > 90%, aditivos antidesgaste à base de zinco (ZDDP) e antiespumantes."
      },
      secao4: {
        titulo: "4. Medidas de Primeiros Socorros",
        conteudo: "Em caso de ingestão não provocar vômito. Se injetado através da pele por alta pressão, transportar imediatamente ao hospital mais próximo informando o tipo de produto."
      },
      secao5: {
        titulo: "5. Combate a Incêndio",
        conteudo: "Ponto de fulgor > 220 °C. Extintores recomendados: Pó Químico Seco, Espuma Mecânica resistente e Dióxido de Carbono."
      },
      secao6: {
        titulo: "6. Derramamentos e Vazamentos",
        conteudo: "Estancar o vazamento. Isolar a área. Absorver com material inerte oleofílico (areia, turfa ou barreiras de polipropileno)."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Armazenar tambores e bombonas sobre paletes em bacia de contenção com piso impermeabilizado, ao abrigo de calor e sol."
      },
      secao8: {
        titulo: "8. Proteção Individual (EPI)",
        conteudo: "Luvas de borracha nitrílica ou neoprene, óculos com vedação lateral e botas com solado resistente a óleos."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Aspecto:</strong> Líquido límpido âmbar.<br><strong>Viscosidade a 40°C:</strong> 68 cSt (ISO VG 68).<br><strong>Densidade a 15°C:</strong> ~0.884 g/cm³."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Estável sob temperaturas normais de uso e estocagem. Incompatível com oxidantes fortes."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "Baixa toxicidade aguda oral e dérmica. O contato frequente sem EPI pode remover os óleos naturais da pele gerando dermatites."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Não despejar no solo virgem ou mananciais. Forma película impermeável na superfície da água prejudicando trocas gasosas."
      },
      secao13: {
        titulo: "13. Considerações de Descarte",
        conteudo: "O descarte de óleos lubrificantes usados (OLUC) é regulamentado pela Resolução CONAMA 362/05 - recolhimento para rerrefino obrigatório."
      },
      secao14: {
        titulo: "14. Informações de Transporte",
        conteudo: "Não classificado como carga perigosa para transporte terrestre regular segundo critérios da ANTT."
      },
      secao15: {
        titulo: "15. Regulamentações",
        conteudo: "ABNT NBR 14725 / CONAMA 362/05 / Normas Regulamentadoras NR-12 e NR-15."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "Consulte o documento original e as instruções do fabricante para dados detalhados."
      }
    }
  },
  {
    id: "prod-rubia-tir-7400",
    nome: "Óleo Mineral para Motores Diesel Pesados",
    nomeComercial: "RUBIA TIR 7400 15W40",
    fabricante: "TotalEnergies",
    imagem: "img/rubia_tir_7400.jpg",
    driveUrl: "https://drive.google.com/file/d/1nrnlWFSUolPsIj1Kx_Gxho2o7BPiFheg/view?usp=sharing",
    categoria: "oleos",
    categoriaLabel: "Óleos Hidráulicos & Motores",
    formula: "Óleos básicos minerais altamente refinados e aditivos de dispersão/detergência (SAE 15W-40)",
    cas: "Mistura Hidrocarbonetos",
    riscoGeral: "Risco Moderado",
    corRisco: "warning",
    descricao: "Óleo multiviscoso premium para motores diesel pesados turboalimentados de perfuratrizes, caminhões betoneira, tratores de esteira e geradores de canteiro.",
    pictogramas: ["health"],
    palavraAdvertencia: "ATENÇÃO",
    frasesPerigo: [
      "H315 - Pode provocar irritação leve à pele em contato frequente",
      "Óleo usado contém substâncias potencialmente nocivas após queima prolongada em motores"
    ],
    episRecomendados: ["Luvas Nitrílicas ou de Neoprene", "Óculos de Segurança", "Macacão com Mangas Compridas", "Calçado com Biqueira e Solado de Poliuretano"],
    emergenciaResumo: {
      olhos: "Enxaguar com cuidado durante 15 minutos com água corrente.",
      pele: "Lavar a pele com bastante água e sabão neutro. Não usar solventes (gasolina/thinner) para limpar as mãos!",
      inalacao: "Remover a pessoa para o ar livre. Se houver tontura, manter em repouso.",
      ingestao: "NÃO INDUZIR VÔMITO. Beber pequenos goles de água e consultar médico imediatamente.",
      incendio: "Usar extintores de Pó Químico ABC, Espuma ou CO2. Não aplicar jato maciço de água.",
      vazamento: "Conter o líquido com areia, serragem ou barreiras de contenção. Recolher em tambores vedados."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e da Empresa",
        conteudo: "<strong>Produto:</strong> TOTAL RUBIA TIR 7400 15W-40<br><strong>Fabricante:</strong> TotalEnergies Lubrificantes do Brasil<br><strong>Uso:</strong> Lubrificação de motores diesel pesados de equipamentos e máquinas de infraestrutura."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Produto não inflamável em temperatura ambiente (Ponto de fulgor > 200°C). O óleo de motor usado pode conter hidrocarbonetos policíclicos aromáticos (HPAs)."
      },
      secao3: {
        titulo: "3. Composição e Ingredientes",
        conteudo: "Óleos minerais de base parafínica (> 80%), pacote de aditivos detergentes de cálcio, dispersantes sem cinzas e inibidores de oxidação (ZDDP)."
      },
      secao4: {
        titulo: "4. Medidas de Primeiros Socorros",
        conteudo: "Lavar imediatamente a pele contaminada com água e sabonete. Se ingerido acidentalmente, procurar atendimento médico de imediato."
      },
      secao5: {
        titulo: "5. Combate a Incêndio",
        conteudo: "Fogo classe B. Meios de extinção: Espuma mecânica para líquidos inflamáveis, pó químico seco e dióxido de carbono."
      },
      secao6: {
        titulo: "6. Derramamentos e Vazamentos",
        conteudo: "Evitar contaminação de bueiros e redes de drenagem. Conter o líquido espalhado e recolher em recipientes rotulados."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Guardar em tambores fechados sob área coberta e piso cimentado protegido de intempéries."
      },
      secao8: {
        titulo: "8. Proteção Individual (EPI)",
        conteudo: "Luvas impermeáveis de borracha nitrílica, óculos de proteção com lentes incolores e uniforme de brim pesado."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Aspecto:</strong> Líquido límpido marrom claro.<br><strong>Grau SAE:</strong> 15W-40.<br><strong>Ponto de Fulgor:</strong> > 220 °C.<br><strong>Densidade a 15°C:</strong> ~0.888 g/cm³."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Estável nas condições normais. A combustão pode gerar monóxido de carbono (CO) e fuligem."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "O contato prolongado e reiterado com óleos de motor já usados exige lavagem imediata para prevenir dermatites."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Substância insolúvel em água. Danoso à vida aquática caso descartado incorretamente."
      },
      secao13: {
        titulo: "13. Considerações de Descarte",
        conteudo: "Envio obrigatório para rerrefino credenciado pela ANP conforme Resolução CONAMA 362/2005."
      },
      secao14: {
        titulo: "14. Transporte",
        conteudo: "Não regulamentado como produto perigoso pela Resolução ANTT vigente."
      },
      secao15: {
        titulo: "15. Regulamentações",
        conteudo: "ABNT NBR 14725 / Resolução CONAMA 362/05 / Normas Regulamentadoras NR-06 e NR-15."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "FDS oficial TotalEnergies disponível no link do Google Drive para conferência completa."
      }
    }
  },
  {
    id: "prod-unigrax-grf2",
    nome: "Graxa Grafitada Industrial de Extrema Pressão",
    nomeComercial: "UNIGRAX GRF 2 30",
    fabricante: "Ingrax Indústria de Graxas",
    imagem: "img/unigrax_grf_2.jpg",
    driveUrl: "https://drive.google.com/file/d/1Z-SZgPKIw-_PkVA0cIOo_kxd2nOT3FTk/view?usp=sharing",
    categoria: "graxas",
    categoriaLabel: "Graxas & Lubrificação Pesada",
    formula: "Sabão de cálcio com óleos minerais parafínicos e 30% de grafite em pó",
    cas: "Mistura Graxa Cálcio/Grafite",
    riscoGeral: "Baixo Risco",
    corRisco: "safe",
    descricao: "Graxa grafitada resistente a altas cargas mecânicas, choques e lavagem por água para pinos, roletes de esteira, cabos de aço e corrediças de perfuratrizes.",
    pictogramas: ["exclamation"],
    palavraAdvertencia: "CUIDADO",
    frasesPerigo: [
      "H315 - Causa leve irritação cutânea por atrito",
      "Excelente adesividade e resistência extrema à lavagem por água e lama bentonítica"
    ],
    episRecomendados: ["Luvas Nitrílicas de Cano Médio", "Óculos de Proteção", "Vestimenta de Trabalho Resistente", "Botas de Segurança"],
    emergenciaResumo: {
      olhos: "Lavar com água em abundância por 15 minutos.",
      pele: "Remover a graxa com papel toalha ou pano limpo e lavar com água e sabão neutro.",
      inalacao: "Risco inalatório desprezível em temperatura ambiente devido à forma de pasta graxa.",
      ingestao: "Não provocar vômito. Consultar serviço médico.",
      incendio: "Extintores de pó químico ABC, espuma mecânica ou CO2.",
      vazamento: "Raspar a graxa com espátula ou pá e colocar em balde/recipiente adequado para descarte."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e da Empresa",
        conteudo: "<strong>Produto:</strong> UNIGRAX GRF 2 30 (Graxa Grafitada)<br><strong>Fabricante:</strong> Ingrax Indústria e Comércio de Graxas S/A<br><strong>Aplicação:</strong> Lubrificação sob carga pesada e vibração em eixos, pinos e trilhos de equipamentos de campo."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Produto com baixo potencial de risco químico. Pode provocar leve irritação cutânea se mantido em contato contínuo sob a pele."
      },
      secao3: {
        titulo: "3. Composição e Ingredientes",
        conteudo: "Espessante de sabão de cálcio, óleos minerais parafínicos refinados e grafite coloidal de alta pureza (teor ~30%)."
      },
      secao4: {
        titulo: "4. Primeiros Socorros",
        conteudo: "Remover resíduos de graxa da pele com toalha de papel e sabão desengraxante. Lavar os olhos se houver partículas de grafite."
      },
      secao5: {
        titulo: "5. Combate a Incêndio",
        conteudo: "Ponto de gota > 95°C. Usar pó químico seco ou gás carbônico (CO2). Evitar jatos de água que possam espalhar a massa graxa."
      },
      secao6: {
        titulo: "6. Derramamento e Coleta",
        conteudo: "Por ser consistente/pastosa, recolher raspando com pás ou espátulas plásticas diretamente para embalagem de resíduos."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Manter baldes plásticos fechados e protegidos do sol direto e fontes de calor excessivo."
      },
      secao8: {
        titulo: "8. Proteção Individual (EPI)",
        conteudo: "Luvas de proteção impermeáveis (nitrila ou PVC reforçado) e calçado de couro hidrofugado."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Aspecto:</strong> Graxa pastosa e lisa de coloração preta grafite.<br><strong>Grau NLGI:</strong> 2.<br><strong>Solubilidade em Água:</strong> Praticamente insolúvel (hidrorrepelente)."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Estável. Não reage de forma violenta com água nem com atmosferas úmidas."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "Produto não considerado tóxico para fins de manuseio normal com EPI adequado."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Apresenta baixa mobilidade no solo. Evitar descarte direto no ambiente para não afetar pequenos organismos aquáticos."
      },
      secao13: {
        titulo: "13. Considerações de Descarte",
        conteudo: "Resíduo Classe II-A (Não perigoso / não inerte). Descarte por coprocessamento ou aterro industrial autorizado."
      },
      secao14: {
        titulo: "14. Informações de Transporte",
        conteudo: "Não classificado como produto perigoso para fins de transporte rodoviário (ANTT)."
      },
      secao15: {
        titulo: "15. Regulamentações",
        conteudo: "ABNT NBR 14725 / Portaria MTb nº 3.214/78."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "FDS oficial da Ingrax acessível diretamente pelo link do Google Drive para consulta integral."
      }
    }
  },
  {
    id: "prod-unigrax-blue2",
    nome: "Graxa Azul de Complexo de Lítio para Altas Temperaturas",
    nomeComercial: "UNIGRAX BLUE 2",
    fabricante: "Ingrax Indústria de Graxas",
    imagem: "img/unigrax_blue_2.jpg",
    driveUrl: "https://drive.google.com/file/d/1Z-SZgPKIw-_PkVA0cIOo_kxd2nOT3FTk/view?usp=sharing",
    categoria: "graxas",
    categoriaLabel: "Graxas & Lubrificação Pesada",
    formula: "Sabão de complexo de lítio, óleos minerais parafínicos de alta pureza e corante azul",
    cas: "Mistura Lítio Complexo",
    riscoGeral: "Baixo Risco",
    corRisco: "safe",
    descricao: "Graxa azul multiuso de alta performance para mancais de rolamento, cubos de roda e juntas submetidas a temperaturas severas (até 180°C) e cargas de choque.",
    pictogramas: ["exclamation"],
    palavraAdvertencia: "CUIDADO",
    frasesPerigo: [
      "H315 - Pode causar leve irritação cutânea por contato contínuo",
      "Ponto de gota elevado (> 260°C) e excelente estabilidade mecânica sob vibração"
    ],
    episRecomendados: ["Luvas Nitrílicas de Proteção", "Óculos Panorâmicos", "Calçado de Couro com Biqueira", "Uniforme com Mangas Longas"],
    emergenciaResumo: {
      olhos: "Lavar com água em abundância por 15 minutos mantendo pálpebras abertas.",
      pele: "Remover a graxa azul com papel toalha e lavar a pele com água morna e sabão neutro.",
      inalacao: "Inalação desprezível em temperatura ambiente devido à consistência pastosa.",
      ingestao: "Não induzir vômito. Consultar serviço médico com a FDS.",
      incendio: "Extintores de pó químico ABC, espuma mecânica ou CO2. Não usar jato maciço de água.",
      vazamento: "Raspar o material pastoso com espátula e recolher em recipiente para descarte apropriado."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e da Empresa",
        conteudo: "<strong>Produto:</strong> UNIGRAX BLUE 2 (Graxa Azul de Complexo de Lítio)<br><strong>Fabricante:</strong> Ingrax Indústria e Comércio de Graxas S/A<br><strong>Aplicação:</strong> Rolamentos de alta rotação, cubos de roda e mancais industriais em condições severas de calor e carga."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Baixo risco químico. Pode provocar leve irritação à pele em pessoas sensíveis após exposição repetida sem luvas."
      },
      secao3: {
        titulo: "3. Composição e Ingredientes",
        conteudo: "Sabão de complexo de lítio (10-15%), óleos minerais básicos de petróleo refinados (> 80%), aditivos inibidores de oxidação, antiferrugem e pigmento azul."
      },
      secao4: {
        titulo: "4. Medidas de Primeiros Socorros",
        conteudo: "Remover roupas sujas de graxa. Lavar a pele com água e sabão. Em caso de irritação ocular, lavar com soro fisiológico ou água limpa."
      },
      secao5: {
        titulo: "5. Combate a Incêndio",
        conteudo: "Ponto de gota > 260 °C. Extintores recomendados: Pó Químico Seco ABC, Espuma e CO2."
      },
      secao6: {
        titulo: "6. Derramamentos e Vazamentos",
        conteudo: "Coletar o material raspando com espátula plástica para tambores de resíduo graxo devidamente identificados."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Armazenar baldes plásticos fechados em local seco e fresco, protegidos de fontes de calor ou faíscas."
      },
      secao8: {
        titulo: "8. Proteção Individual (EPI)",
        conteudo: "Luvas de borracha nitrílica ou PVC, óculos de segurança com proteção lateral e botas de segurança com solado resistente a óleos."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Aspecto:</strong> Pasta lisa e brilhante de cor azul intensa.<br><strong>Grau NLGI:</strong> 2.<br><strong>Ponto de Gota:</strong> > 260 °C.<br><strong>Solubilidade em Água:</strong> Insolúvel (excelente resistência à lavagem por água)."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Estável. Não reage perigosamente com água. Incompatível com agentes oxidantes fortes."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "DL50 oral estimada > 5000 mg/kg. Baixa toxicidade aguda dérmica e inalatória."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Pouco biodegradável. Evitar o descarte direto no solo ou em cursos d'água."
      },
      secao13: {
        titulo: "13. Considerações de Descarte",
        conteudo: "Resíduo Classe II-A. Coleta e destinação para coprocessamento ou rerrefino conforme regulamentação CONAMA."
      },
      secao14: {
        titulo: "14. Informações de Transporte",
        conteudo: "Não classificado como produto perigoso pela Resolução ANTT vigente."
      },
      secao15: {
        titulo: "15. Regulamentações",
        conteudo: "ABNT NBR 14725 / Portaria MTb 3.214/78 / Norma Regulamentadora NR-26."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "Acesse a FDS original do fabricante Ingrax através do botão do Google Drive."
      }
    }
  },
  {
    id: "prod-bentonita",
    nome: "Bentonita Sódica Especial para Fundações",
    nomeComercial: "BENTONITA",
    fabricante: "Mineração de Argilas Especiais",
    imagem: "img/bentonita_bag.jpg",
    driveUrl: "https://drive.google.com/file/d/1KRdGz3iVyqbQRTmYH0v81KHXyzLk1DSO/view?usp=sharing",
    categoria: "fluidos",
    categoriaLabel: "Fluidos de Perfuração & Geotecnia",
    formula: "Argila montmorilonita sódica de alta viscosidade",
    cas: "1302-78-9",
    riscoGeral: "Baixo Risco",
    corRisco: "safe",
    descricao: "Argila coloidal hidrofílica em pó para estabilização de perfurações, paredes diafragma, estacas barrete e produção de lamas bentoníticas tixotrópicas.",
    pictogramas: ["exclamation"],
    palavraAdvertencia: "ATENÇÃO",
    frasesPerigo: [
      "H320 - Provoca irritação ocular por atrito mecânico de poeira",
      "Piso molhado com lama torna-se extremamente escorregadio com perigo de quedas"
    ],
    episRecomendados: ["Máscara PFF2 contra Poeiras", "Óculos de Proteção com Vedação", "Luvas de Vaqueta ou Raspa", "Botas com Solado Antiderrapante"],
    emergenciaResumo: {
      olhos: "Lavar abundantemente com água limpa por 15 minutos mantendo pálpebras abertas.",
      pele: "Lavar com água e sabão. Em caso de piso molhado com bentonita, isolar imediatamente a área para evitar quedas.",
      inalacao: "Remover a pessoa para área arejada. Repouso.",
      ingestao: "Beber água. Não provocar vômito.",
      incendio: "Produto incombustível e inerte ao fogo.",
      vazamento: "Varrer o pó seco com pá e vassoura. NÃO lavar diretamente com água pura no piso."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e da Empresa",
        conteudo: "<strong>Produto:</strong> BENTONITA SÓDICA PARA LAMA DE PERFURAÇÃO<br><strong>Uso:</strong> Preparo de fluidos tixotrópicos para contenção de paredes de valas, estacas e escavações geotécnicas."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Toxicidade aguda por inalação mecânica - Categoria 5; Irritação ocular leve - Categoria 2B. Alerta físico: lama hidratada no chão gera alto risco de escorregamento e quedas."
      },
      secao3: {
        titulo: "3. Composição e Ingredientes",
        conteudo: "Montmorilonita sódica ativada (> 85% - CAS 1302-78-9) com traços residuais de quartzo livre respirável (< 1%)."
      },
      secao4: {
        titulo: "4. Medidas de Primeiros Socorros",
        conteudo: "Lavar olhos com água limpa. Não friccionar os olhos para evitar arranhões causados pelo particulado mineral."
      },
      secao5: {
        titulo: "5. Combate a Incêndio",
        conteudo: "Produto inerte e incombustível. Não propaga chamas nem produz gases tóxicos."
      },
      secao6: {
        titulo: "6. Derramamentos e Vazamentos",
        conteudo: "Recolher o pó seco com pás. Evitar umedecer o piso com mangueiras, pois formará uma superfície viscosa e escorregadia."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Armazenar sacos de 25 kg sobre paletes de madeira em local seco, ventilado e coberto, longe de umidade."
      },
      secao8: {
        titulo: "8. Proteção Individual (EPI)",
        conteudo: "Respirador facial PFF2 para pós, óculos contra impactos e calçado com sola tracionada antiderrapante."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Aspecto:</strong> Pó fino de coloração cinza a bege claro.<br><strong>pH em suspensão 6%:</strong> 8.5 a 10.5.<br><strong>Solubilidade:</strong> Insolúvel (forma suspensão coloidal espessa)."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Completamente estável sob condições normais de pressão e temperatura ambiente."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "Produto inerte e não tóxico. Evitar a inalação contínua e repetida de poeira mineral concentrada sem máscara."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Argila natural de baixa agressividade ecológica. Não despejar em canais pluviais em grande quantidade para evitar sedimentação."
      },
      secao13: {
        titulo: "13. Considerações de Descarte",
        conteudo: "Resíduo Classe II-B (Inerte). Destinação em aterro devidamente licenciado para resíduos da construção civil."
      },
      secao14: {
        titulo: "14. Informações de Transporte",
        conteudo: "Carga não perigosa conforme critérios de transporte terrestre da ANTT."
      },
      secao15: {
        titulo: "15. Regulamentações",
        conteudo: "ABNT NBR 14725 / Portaria MTb 3.214/78 / Norma Regulamentadora NR-26."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "Para acessar a FDS original do fornecedor, utilize o botão de visualização direta do Google Drive."
      }
    }
  },
  {
    id: "prod-lubrax-utile-fpx220",
    nome: "Óleo Lubrificante Industrial para Engrenagens e Redutores",
    nomeComercial: "LUBRAX UTILE FPX 220",
    fabricante: "Vibra Energia S.A.",
    imagem: "img/lubrax_utile_fpx_220.jpg",
    driveUrl: "https://drive.google.com/file/d/1SUVl3iHB7NQfKc0guaeDk1SeLkqAA_mv/view?usp=sharing",
    categoria: "oleos",
    categoriaLabel: "Óleos Hidráulicos & Motores",
    formula: "Óleos básicos minerais parafínicos refinados (< 3% DMSO) com aditivos de extrema pressão (ISO VG 220)",
    cas: "Mistura Mineral Refinada",
    riscoGeral: "Baixo Risco",
    corRisco: "safe",
    descricao: "Óleo lubrificante industrial de alta viscosidade (ISO VG 220) para caixas de engrenagens fechadas, redutores planetários, mancais de deslizamento e rolamento sob cargas severas em perfuratrizes e centrais.",
    pictogramas: ["shieldSafe"],
    palavraAdvertencia: "CUIDADO",
    frasesPerigo: [
      "Produto químico não classificado como perigoso de acordo com a ABNT NBR 14725:2023",
      "O contato prolongado sem EPI pode remover os óleos naturais da pele. Evite inalação sob aquecimento severo"
    ],
    episRecomendados: ["Luvas de Proteção em Nitrila ou PVC", "Óculos de Segurança com Proteção Lateral", "Botas com Solado Resistente a Óleos", "Uniforme com Mangas Longas"],
    emergenciaResumo: {
      olhos: "Lavar imediatamente com água corrente durante pelo menos 15 minutos mantendo as pálpebras abertas.",
      pele: "Retirar roupas contaminadas e lavar a pele abundantemente com água e sabão neutro.",
      inalacao: "Remover a pessoa para local arejado e fresco. Manter em repouso em posição confortável para respirar.",
      ingestao: "NÃO PROVOCAR VÔMITO. Enxaguar a boca com água limpa em abundância. Chamar médico se houver mal-estar.",
      incendio: "Usar água pulverizada (neblina), pó químico seco ABC, espuma para hidrocarbonetos ou CO2. Não usar jato maciço de água.",
      vazamento: "Estancar vazamento com segurança. Absorver com areia ou terra inerte. Conter para evitar entrada em bueiros ou rios."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e da Empresa",
        conteudo: "<strong>Produto:</strong> LUBRAX UTILE FPX 220<br><strong>Código da FDS:</strong> 1017405 (Rev. 23/05/2025)<br><strong>Fabricante:</strong> Vibra Energia S.A.<br><strong>Endereço:</strong> Rua Correia Vasques, 250 - Rio de Janeiro/RJ<br><strong>Aplicação:</strong> Lubrificação de engrenagens fechadas, mancais e redutores pesados em equipamentos de fundação.<br><strong>SAC:</strong> 4090 1337 / 0800 770 1337 | <strong>Emergência CAE:</strong> 0800 024 44 33."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Produto químico não classificado como perigoso de acordo com a norma ABNT NBR 14725:2023. Elementos mandatórios de rotulagem GHS dispensados de obrigatoriedade."
      },
      secao3: {
        titulo: "3. Composição e Informações sobre os Ingredientes",
        conteudo: "<strong>Forma do produto:</strong> Mistura.<br>Os óleos minerais presentes no produto são altamente refinados e contêm &lt; 3% de extrato de DMSO (IP 346). Esta mistura não contém nenhuma substância perigosa acima dos limites de corte da ABNT NBR 14725."
      },
      secao4: {
        titulo: "4. Medidas de Primeiros Socorros",
        conteudo: "Em caso de mal-estar, consulte um médico. Se houver inalação de vapores aquecidos, remover a vítima para o ar fresco. Em contato dérmico, retirar roupas contaminadas e lavar com água em abundância. Em contato ocular, enxaguar com água limpa. Em caso de ingestão, NÃO provocar vômito e enxaguar a boca."
      },
      secao5: {
        titulo: "5. Medidas de Combate a Incêndio",
        conteudo: "<strong>Ponto de Fulgor:</strong> 246 °C (vaso aberto Cleveland). Não apresenta perigo direto de incêndio em temperatura ambiente.<br><strong>Meios de extinção recomendados:</strong> Água pulverizada/neblina, pó químico seco ABC, espuma para hidrocarbonetos e dióxido de carbono (CO2). Evitar jato d'água concentrado direto."
      },
      secao6: {
        titulo: "6. Medidas de Controle para Derramamento ou Vazamento",
        conteudo: "Interromper o vazamento se possível sem risco. Isolar a área. Absorver com barreiras de areia, terra ou mantas absorventes oleofílicas para evitar migração para galerias pluviais ou mananciais."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Manusear com ventilação adequada, evitando formação de névoas. Conservar somente no recipiente original fechado, em local fresco, coberto e seco, ao abrigo da luz solar e longe de fontes de calor ou chamas abertas."
      },
      secao8: {
        titulo: "8. Controle de Exposição e Proteção Individual (EPI)",
        conteudo: "<strong>Limite de Tolerância Ocupacional:</strong> Névoa de óleo mineral (ACGIH 2024 TLV-TWA): 5 ppm.<br><strong>EPI Recomendado:</strong> Luvas de nitrila ou neoprene, óculos com vedação/proteção lateral, calçado com solado resistente a óleos e macacão de trabalho com mangas longas."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Estado físico:</strong> Líquido límpido.<br><strong>Cor:</strong> Castanho claro.<br><strong>Viscosidade Cinemática a 40°C:</strong> 220 cSt (mm²/s) - ISO VG 220.<br><strong>Ponto de Fulgor:</strong> 246 °C (COC).<br><strong>Densidade Relativa:</strong> 0,89 (20/4°C)."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Estável sob condições normais de uso e estocagem. Evitar contato com temperaturas extremas, chamas abertas e oxidantes fortes. Não gera produtos perigosos de decomposição à temperatura ambiente."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "Baixa toxicidade aguda. Mistura não contém ingredientes carcinogênicos (óleos de base mineral altamente refinados com &lt; 3% extrato DMSO conforme IP 346). O contato frequente e sem higienização pode causar ressecamento da pele."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Classificado como rapidamente degradável. Evitar o descarte direto no solo ou em cursos hídricos para não prejudicar pequenos organismos aquáticos."
      },
      secao13: {
        titulo: "13. Considerações sobre Destinação Final",
        conteudo: "O descarte de óleos lubrificantes usados (OLUC) é regulamentado pela Lei nº 12.305/2010 (PNRS) e Resolução CONAMA nº 362/05 com recolhimento obrigatório para rerrefino. Não descartar em esgotos nem no solo. Não reutilizar recipientes vazios."
      },
      secao14: {
        titulo: "14. Informações sobre Transporte",
        conteudo: "Não classificado como carga perigosa para transporte rodoviário regular segundo os critérios da ANTT (Resolução nº 5998/22), transporte marítimo (IMDG) ou aéreo (IATA)."
      },
      secao15: {
        titulo: "15. Informações sobre Regulamentações",
        conteudo: "Norma ABNT NBR 14725:2023 / Norma Regulamentadora NR-26 (Sinalização e Rotulagem) / Decreto Federal nº 10.088/2019 / Resolução ANTT nº 5998/2022."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "FDS oficial Vibra Energia nº 1017405 homologada. Arquivo PDF original completo disponível para consulta direta no Google Drive através do botão acima."
      }
    }
  },
  {
    id: "prod-lubrax-hydra-xp68",
    nome: "Óleo Hidráulico Antidesgaste de Alta Performance",
    nomeComercial: "LUBRAX HYDRA XP 68",
    fabricante: "Vibra Energia S.A.",
    imagem: "img/lubrax_hydra_xp_68.jpg",
    driveUrl: "https://drive.google.com/file/d/1r-tM3aAdS_SN2aUuA6IuTywNA_cCLV79/view?usp=sharing",
    categoria: "oleos",
    categoriaLabel: "Óleos Hidráulicos & Motores",
    formula: "Óleos básicos minerais parafínicos refinados (ausentes de benzeno/tolueno/xileno) e antioxidante fenólico (ISO VG 68)",
    cas: "Mistura Mineral / 128-39-2",
    riscoGeral: "Baixo Risco",
    corRisco: "safe",
    descricao: "Óleo hidráulico antidesgaste de alta estabilidade térmica e oxidativa (ISO VG 68) para circuitos hidráulicos de alta pressão, bombas de palhetas, pistões e motores hidráulicos de perfuratrizes.",
    pictogramas: ["shieldSafe"],
    palavraAdvertencia: "CUIDADO",
    frasesPerigo: [
      "Produto químico não classificado como perigoso segundo a norma ABNT NBR 14725:2023",
      "Atenção com injeção de óleo sob alta pressão na pele através de microfissuras em mangueiras hidráulicas"
    ],
    episRecomendados: ["Luvas de Nitrila ou Neoprene Resistentes a Óleos", "Óculos de Segurança com Vedação Lateral", "Botas com Biqueira e Solado de Poliuretano", "Macacão com Mangas Longas"],
    emergenciaResumo: {
      olhos: "Lavar imediatamente com água corrente durante pelo menos 15 minutos mantendo as pálpebras abertas.",
      pele: "Lavar a pele com bastante água e sabão. ATENÇÃO: se houver injeção sob alta pressão na pele, procurar cirurgião com urgência!",
      inalacao: "Remover a pessoa para ambiente fresco e arejado; manter em repouso e posição que facilite a respiração.",
      ingestao: "NÃO INDUZIR VÔMITO. Enxaguar a boca com água limpa. Consultar médico imediatamente se sentir indisposição.",
      incendio: "Usar água pulverizada, pó químico seco ABC, espuma para hidrocarbonetos ou CO2. Não usar jato maciço direto de água.",
      vazamento: "Conter o líquido com barreiras de areia, terra ou mantas absorventes. Evitar que atinja redes de drenagem pluvial ou rios."
    },
    fdsCompleta: {
      secao1: {
        titulo: "1. Identificação do Produto e da Empresa",
        conteudo: "<strong>Produto:</strong> LUBRAX HYDRA XP 68<br><strong>Código da FDS:</strong> 1002285 (Rev. 26/05/2025)<br><strong>Fabricante:</strong> Vibra Energia S.A.<br><strong>Endereço:</strong> Rua Correia Vasques, 250 - Rio de Janeiro/RJ<br><strong>Aplicação:</strong> Sistemas hidráulicos industriais e automotivos de máquinas de fundação operando sob alta pressão e esforço contínuo.<br><strong>SAC:</strong> 4090 1337 / 0800 770 1337 | <strong>Emergência CAE:</strong> 0800 024 44 33."
      },
      secao2: {
        titulo: "2. Identificação de Perigos",
        conteudo: "Produto químico não classificado como perigoso de acordo com a norma ABNT NBR 14725:2023. Elementos de rotulagem GHS dispensados de obrigatoriedade."
      },
      secao3: {
        titulo: "3. Composição e Informações sobre os Ingredientes",
        conteudo: "<strong>Forma do produto:</strong> Mistura.<br>Óleos minerais altamente refinados (&lt; 3% de extrato de DMSO - IP 346), ausentes de benzeno, tolueno e xileno. Contém 0,1% a 0,2% de 2,6-di-terc-butilfenol (CAS 128-39-2)."
      },
      secao4: {
        titulo: "4. Medidas de Primeiros Socorros",
        conteudo: "Em caso de mal-estar, consulte um médico. Se inalado, remover a vítima para o ar fresco. Se houver contato com a pele, lavar com bastante água e sabão. Se injetado acidentalmente sob alta pressão na pele, procurar imediatamente cirurgião vascular/ortopédico. Em contato com os olhos, enxaguar por 15 minutos. Se ingerido, NÃO induzir vômito."
      },
      secao5: {
        titulo: "5. Medidas de Combate a Incêndio",
        conteudo: "<strong>Ponto de Fulgor:</strong> 242 °C (COC). Não inflamável à temperatura ambiente.<br><strong>Meios de extinção:</strong> Água pulverizada/neblina, pó químico seco ABC, espuma mecânica e CO2. Não usar jato maciço direto de água."
      },
      secao6: {
        titulo: "6. Medidas de Controle para Derramamento ou Vazamento",
        conteudo: "Interromper o vazamento. Absorver com material inerte (areia, argila ou serragem). Evitar a penetração em galerias pluviais, córregos ou solo virgem."
      },
      secao7: {
        titulo: "7. Manuseio e Armazenamento",
        conteudo: "Manusear com ventilação adequada. Armazenar em local coberto, fresco, seco e protegido da luz solar direta, fontes de calor e faíscas. Manter tambores e baldes sempre fechados."
      },
      secao8: {
        titulo: "8. Controle de Exposição e Proteção Individual (EPI)",
        conteudo: "<strong>Limite Ocupacional:</strong> Névoa de óleo mineral (ACGIH 2024): 5 ppm.<br><strong>EPI Obrigatório:</strong> Luvas impermeáveis de nitrila ou neoprene, óculos com proteção lateral e calçado fechado com solado resistente a óleos minerais."
      },
      secao9: {
        titulo: "9. Propriedades Físicas e Químicas",
        conteudo: "<strong>Aspecto:</strong> Líquido límpido amarelado a castanho.<br><strong>Viscosidade Cinemática a 40°C:</strong> 63 cSt (mm²/s) - ISO VG 68.<br><strong>Ponto de Fulgor:</strong> 242 °C (COC).<br><strong>Densidade Relativa a 20°C:</strong> 0,88 (20/4°C)."
      },
      secao10: {
        titulo: "10. Estabilidade e Reatividade",
        conteudo: "Estável sob condições normais de uso e estocagem. Não reativo. Evitar temperaturas extremas e contato com agentes oxidantes fortes."
      },
      secao11: {
        titulo: "11. Informações Toxicológicas",
        conteudo: "Baixa toxicidade aguda dérmica e oral (DL50 dérmica &gt; 1000 mg/kg para aditivo fenólico). Produto isento de substâncias carcinogênicas (&lt; 3% DMSO IP 346)."
      },
      secao12: {
        titulo: "12. Informações Ecológicas",
        conteudo: "Classificado como rapidamente degradável. Produto não classificado como perigoso ao ambiente aquático segundo ensaios globais da mistura."
      },
      secao13: {
        titulo: "13. Considerações sobre Destinação Final",
        conteudo: "Descarte de acordo com a Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) e Resolução CONAMA nº 362/05 (envio mandatório para rerrefino por coletor credenciado). Proibido despejo em esgoto ou solo."
      },
      secao14: {
        titulo: "14. Informações sobre Transporte",
        conteudo: "Não classificado como produto perigoso para fins de transporte rodoviário terrestre conforme a Resolução ANTT nº 5998/2022."
      },
      secao15: {
        titulo: "15. Informações sobre Regulamentações",
        conteudo: "Norma ABNT NBR 14725:2023 / Norma Regulamentadora NR-26 (Sinalização e Rotulagem) / Decreto Federal nº 10.088/2019 / Resolução ANTT nº 5998/2022."
      },
      secao16: {
        titulo: "16. Outras Informações",
        conteudo: "FDS oficial Vibra Energia nº 1002285 homologada. Documento PDF original completo disponível no Google Drive através do link de acesso direto."
      }
    }
  }
];

// Dicionário de pictogramas GHS com ícones SVG integrados
const GHS_PICTOGRAMS = {
  exclamation: {
    label: "Atenção / Irritante (GHS07)",
    icon: `<svg viewBox="0 0 100 100" class="ghs-diamond" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,4 96,50 50,96 4,50" fill="#ffffff" stroke="#EF4444" stroke-width="8" stroke-linejoin="round" />
      <text x="50" y="58" font-family="Arial, sans-serif" font-size="44" font-weight="900" text-anchor="middle" fill="#111827">!</text>
    </svg>`
  },
  health: {
    label: "Perigo à Saúde / Toxicidade por Aspiração (GHS08)",
    icon: `<svg viewBox="0 0 100 100" class="ghs-diamond" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,4 96,50 50,96 4,50" fill="#ffffff" stroke="#EF4444" stroke-width="8" stroke-linejoin="round" />
      <g fill="#111827">
        <circle cx="50" cy="34" r="8" />
        <path d="M42,47 L58,47 L65,65 L56,65 L54,58 L46,58 L44,65 L35,65 Z" />
        <polygon points="50,50 53,58 61,58 55,63 57,71 50,66 43,71 45,63 39,58 47,58" fill="#ffffff" />
      </g>
    </svg>`
  },
  shieldSafe: {
    label: "GHS: Produto Não Classificado como Perigoso (Isento de Rotulagem Mandatória NBR 14725:2023)",
    icon: `<svg viewBox="0 0 100 100" class="ghs-diamond ghs-safe" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,4 96,50 50,96 4,50" fill="#ffffff" stroke="#10B981" stroke-width="8" stroke-linejoin="round" />
      <path d="M50,23 L71,32 L71,53 C71,66 50,76 50,76 C50,76 29,66 29,53 L29,32 Z" fill="#ECFDF5" stroke="#059669" stroke-width="3.5" />
      <path d="M42,50 L48,56 L60,42" fill="none" stroke="#059669" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  }
};
