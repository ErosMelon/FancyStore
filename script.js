document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        es: {
            welcome: "Bienvenido a",
            title: "Fancy Services",
            main_title: "Fancy Services",
            category_valorant: "VALORANT",
            category_bo6: "Bo6",
            category_fortnite: "FORTNITE",
            category_woofers: "WOOFERS",
            category_accounts: "ACCOUNTS",
            valorant_modal_title: "PRODUCTOS VALORANT",
            accounts_modal_title: "CUENTAS",
            bo6_modal_title: "PRODUCTOS BO6",
            fortnite_modal_title: "PRODUCTOS FORTNITE",
            woofers_modal_title: "PRODUCTOS WOOFERS",
            slotted_product: "SLOTTED",
            rage_product: "RAGE",
            external_product: "EXTERNAL",
            unlock_product: "UNLOCK",
            bo6_external_product: "external",
            bo6_internal_spoofer_product: "internal+spoofer",
            woofers_perm_product: "1-PERM",
            fortnite_external_product: "EXTERNAL",
            bo6_ext_title: "Características External",
            bo6_ext_req_title: "Requisitos",
            bo6_ext_req_1: "• Windows 10 + Windows 11 (21H2 - 22H2) Soportado",
            bo6_ext_req_2: "• Windows 11 23H2 Soportado",
            bo6_ext_req_3: "• Windows 11 24H2 Soportado",
            bo6_ext_req_4: "• Battlenet, Steam y XBOX GAMEPASS Soportados",
            bo6_ext_req_5: "• Mando Soportado",
            bo6_ext_aim_title: "Aimbot - Características",
            bo6_ext_aim_1: "• Predecir Apuntado",
            bo6_ext_aim_2: "• Métodos de Apuntado: Distancia, Punto de Mira",
            bo6_ext_aim_3: "• Soporte para Mando",
            bo6_ext_aim_4: "• Dos Teclas de Apuntado",
            bo6_ext_aim_5: "• Ignorar Jugadores Derribados",
            bo6_ext_aim_6: "• Ignorar Visibilidad",
            bo6_ext_aim_7: "• Ignorar FOV Cercano",
            bo6_ext_aim_8: "• Ignorar IA",
            bo6_ext_pesp_title: "ESP de Jugador - Características",
            bo6_ext_pesp_1: "• Activar ESP",
            bo6_ext_pesp_2: "• Distancia de ESP",
            bo6_ext_pesp_3: "• Caja ESP",
            bo6_ext_pesp_4: "• Huesos ESP",
            bo6_ext_pesp_5: "• Modo ESP: ESP Completo",
            bo6_ext_aiesp_title: "ESP de IA - Características",
            bo6_ext_aiesp_1: "• Activar ESP",
            bo6_ext_aiesp_2: "• Distancia de ESP",
            bo6_ext_aiesp_3: "• Caja ESP",
            bo6_ext_aiesp_4: "• Huesos ESP",
            bo6_ext_aiesp_5: "• Modo ESP: ESP Completo, Visible, No Visible",
            bo6_ext_aiesp_6: "• Línea al Punto de Mira",
            bo6_ext_disp_content_title: "Contenido a Mostrar - Características",
            bo6_ext_disp_content_1: "• Nombre",
            bo6_ext_disp_content_2: "• Equipo",
            bo6_ext_disp_content_3: "• Distancia",
            bo6_ext_disp_content_4: "• Vida",
            bo6_ext_disp_content_5: "• Bajas",
            bo6_ext_disp_content_6: "• Arma",
            bo6_ext_disp_options_title: "Opciones de Visualización - Características",
            bo6_ext_disp_options_1: "• Alertas",
            bo6_ext_disp_options_2: "• Distancia de Alerta (0-300)",
            bo6_ext_disp_options_3: "• Punto de Mira",
            bo6_ext_disp_options_4: "• Tamaño de Punto de Mira Ajustable (0-100)",
            bo6_ext_disp_options_5: "• FOV",
            bo6_ext_disp_options_6: "• Impacto de Bala",
            bo6_ext_misc_title: "Misceláneo - Características",
            bo6_ext_misc_1: "• Reducir Retroceso",
            bo6_ext_misc_2: "• Potencia Ajustable (0%-100%)",
            bo6_ext_misc_3: "• Sin Retroceso",
            bo6_ext_misc_4: "• UAV",
            bo6_ext_misc_5: "• Tercera Persona",
            bo6_is_title: "Características Internal + Spoofer",
            bo6_is_req_title: "Requisitos",
            bo6_is_req_1: "• Windows 10 + Windows 11 (21H2 - 22H2) Soportado",
            bo6_is_req_2: "• Windows 11 23H2 Soportado",
            bo6_is_req_3: "• Windows 11 24H2 Soportado",
            bo6_is_req_4: "• Solo PC",
            bo6_is_aim_title: "Aimbot - Características",
            bo6_is_aim_1: "• Tipos de Aim: Estándar, P-Silent",
            bo6_is_aim_2: "• Huesos Objetivo: Casco, Cabeza, Cuello, Pecho, Pelvis, Cualquiera",
            bo6_is_aim_3: "• Huesos de Anulación: Pie Izquierdo, Pie Derecho, Rodilla Izquierda, Rodilla Derecha",
            bo6_is_aim_4: "• Suavizado y Predicción: Ajustable (0-100)",
            bo6_is_aim_5: "• Opciones de Objetivo: Solo Enemigos, Comprobación de Visibilidad, Omitir Derribados/Auto-Reanimación",
            bo6_is_aim_6: "• Priorización: FOV + Distancia, Solo FOV, Solo Distancia",
            bo6_is_aim_7: "• Rango de FOV: Ajustable (0-1000) con visualización",
            bo6_is_aim_8: "• Rango de ESP: Ajustable (0-1000)",
            bo6_is_aim_9: "• Mostrar punto de mira",
            bo6_is_antiaim_title: "Características de Anti-Aim",
            bo6_is_antiaim_1: "• Spin Bot",
            bo6_is_antiaim_2: "• Jitter Bot",
            bo6_is_antiaim_3: "• Bot de giro 180°",
            bo6_is_vis_title: "Visuales - Características",
            bo6_is_vis_player_title: "ESP de Jugador",
            bo6_is_vis_player_1: "• Caja, Caja de Esquina, Caja Rellena, Caja 3D",
            bo6_is_vis_player_2: "• Esqueleto, Barra de Vida, Líneas de Conexión, Distancia, Nombre",
            bo6_is_vis_player_3: "• ID de Equipo, Arma, Contador de Bajas/Muertes, Contornos",
            bo6_is_vis_player_4: "• ESP de Brújula, UAV Avanzado, Advertencias de Apuntado, Trazadoras de Balas",
            bo6_is_vis_loot_title: "ESP de Botín",
            bo6_is_vis_loot_1: "• Munición, Armas, Dinero, Blindaje",
            bo6_is_vis_loot_2: "• Cajas de Suministro, Objetos Varios",
            bo6_is_vis_loot_3: "• Rango Ajustable (1-1000)",
            bo6_is_comp_title: "Brújula y Visuales - Características",
            bo6_is_comp_1: "• Objetivo: Solo Enemigos, Comprobación de Visibilidad, Visuales de Brújula, Advertencias de Apuntado",
            bo6_is_comp_2: "• Brújula: Zoom Ajustable, Tamaño/Relleno de Flecha, Modo Arcoíris",
            bo6_is_rem_title: "Eliminaciones - Características",
            bo6_is_rem_1: "• Control de Retroceso: Sin Retroceso, Cantidad Ajustable, Sin Balanceo",
            bo6_is_rem_2: "• Eliminación de Efectos: Desactivar Sobresalto, Aturdimiento, Granada Cegadora, Sacudida de Escudo, Niebla",
            bo6_is_rem_3: "• Ajustes Visuales: Ocultar Arma, Modo Brillo Completo",
            bo6_is_exp_title: "Exploits y Mejoras - Características",
            bo6_is_exp_1: "• Modo Tercera Persona",
            bo6_is_exp_2: "• Acciones Rápidas: Recarga/Cambio de Arma Instantáneo",
            bo6_is_exp_3: "• Ajuste de FOV: Ajustable (1-200)",
            bo6_is_exp_4: "• Melhorias Visuais: Pular Cutscenes, Minimapa Grande, Playlist de Desenvolvedor, Desbloquear Equipamentos",
            bo6_is_cust_title: "Personalização - Características",
            bo6_is_cust_1: "• Cores da UI e Visuais: Totalmente personalizável para elementos de ESP, Bússola, Traçantes",
            bo6_is_cust_2: "• Salvar/Carregar Configurações: Até 10 configurações ([F1]-[F5])",
            bo6_is_unlock_title: "Desbloqueios e Conta - Características",
            bo6_is_unlock_1: "• Desbloquear Todos os Itens",
            bo6_is_unlock_2: "• Salvar Camuflagens e Acessórios",
            bo6_is_unlock_3: "• Gerenciamento de Conta: Capturas de Tela Limpas, Desbloquear/Reverter Itens, Ignorar Filtro de Palavrões, Clantag Personalizado",
            features: "CARACTERÍSTICAS",
            fortnite_features_title: "CARACTERÍSTICAS DE FORTNITE",
            fn_req_title: "Requisitos",
            fn_req_1: "• Compatible con todas las placas base, CPUs y GPUs",
            fn_req_2: "• Soporta Windows 10 y 11",
            fn_req_3: "• GUI de Menú Interactivo",
            fn_req_4: "• Seguridad y sigilo excepcionales para prevenir detección",
            fn_aim_title: "Aimbot - Características",
            fn_aim_1: "• Activar Aimbot",
            fn_aim_2: "• Activar Predicción",
            fn_aim_3: "• Mostrar círculo de FOV",
            fn_aim_4: "• Suavizado",
            fn_aim_5: "• FOV",
            fn_aim_6: "• Configuración de Tecla de Apuntado",
            fn_aim_7: "• Posición de Apuntado",
            fn_vis_title: "Visuales - Características",
            fn_vis_1: "• Dibujar Caja",
            fn_vis_2: "• Caja Delineada",
            fn_vis_3: "• Caja Rellena",
            fn_vis_4: "• Grosor de Caja",
            fn_vis_5: "• Dibujar Distancia",
            fn_vis_6: "• Distancia Delineada",
            fn_vis_7: "• Dibujar Nombre de Usuario",
            fn_vis_8: "• Dibujar Esqueleto",
            fn_vis_9: "• Esqueleto Delineado",
            fn_vis_10: "• Grosor de Esqueleto",
            fn_vis_11: "• Círculo en la Cabeza",
            fn_vis_12: "• Alerta de Advertencia",
            fn_misc_title: "Misceláneo - Características",
            fn_misc_1: "• Radar",
            fn_misc_2: "• A prueba de streams",
            fn_price_day: "1 Día",
            fn_price_week: "1 Semana",
            fn_price_month: "1 Mes",
            fn_price_lft: "Vitalicio",
            ext_title: "FULL EXTERNO",
            ext_req_title: "Requisitos",
            ext_req_1: "Windows 10 y 11",
            ext_req_2: "Todos los CPU/GPU",
            ext_req_3: "Modo ventana y sin bordes",
            ext_req_4: "No compatible con SO modificados",
            ext_req_5: "Compatible con Aislamiento del núcleo (HVCI)",
            ext_vis_title: "Visuales (ESP)",
            ext_vis_1: "Caja, cabeza, vida, esqueleto, líneas",
            ext_vis_2: "Radar y minimapa",
            ext_vis_3: "Armas, spike, agentes",
            ext_vis_4: "Modo sin lag",
            ext_aim_title: "Aimbot",
            ext_aim_1: "Aimbot + Modo imán",
            ext_aim_2: "Mostrar FOV y línea de objetivo",
            ext_aim_3: "Sin retroceso (RCS) + suavidad",
            ext_misc_title: "Exploits & Misceláneo",
            ext_misc_1: "Emulación de Vanguard",
            ext_misc_2: "Crosshair falso y Bunnyhop",
            ext_misc_3: "Modo invisible para streams",
            ext_misc_4: "Botón de pánico y mostrar FPS",
            ext_price_title: "Precios",
            ext_price_day: "DÍA",
            ext_price_week: "SEMANA",
            ext_price_month: "MES",
            ext_price_lft: "LFT",
            slot_title: "CARACTERÍSTICAS SLOTTED",
            slot_req_title: "Requisitos",
            slot_req_1: "Compatible con Windows 10 - Todas las versiones",
            slot_req_2: "Compatible con Windows 11 - Todas las versiones",
            slot_req_3: "Compatible con todos los componentes CPU/GPU",
            slot_req_4: "Modo ventana y sin bordes compatibles",
            slot_req_5: "Todas las resoluciones compatibles",
            slot_req_6: "No es compatible con SO personalizados",
            slot_req_7: "Compatible con HVCI (Aislamiento del núcleo)",
            slot_vis_title: "Visuales - Características",
            slot_vis_1: "Punto de mira de retroceso",
            slot_vis_2: "Caja 2D y Caja rellena",
            slot_vis_3: "Nombre y Distancia",
            slot_vis_4: "Barra de vida y Punto en la cabeza",
            slot_vis_5: "Filtro de equipo",
            slot_aim_title: "Aimbot - Características",
            slot_aim_1: "Activar y RCS (Control de retroceso)",
            slot_aim_2: "Apuntar a equipo y Tecla de apuntado",
            slot_aim_3: "Hueso de apuntado [Cabeza/Pecho/Pierna]",
            slot_aim_4: "Suavizado y Campo de visión (FOV)",
            slot_aim_5: "Distancia de Aimbot",
            slot_misc_title: "Misceláneo",
            slot_misc_1: "Punto de mira y Círculo de FOV",
            slot_misc_2: "Línea de objetivo",
            slot_misc_3: "Marca de agua",
            slot_misc_4: "A prueba de streams",
            slot_misc_5: "Aislamiento del núcleo [Compatible]",
            slot_price_title: "Precios",
            slot_price_15d: "15 Días",
            slot_price_1m: "1 Mes",
            slot_price_lft: "Vitalicio",
            rage_title: "CARACTERÍSTICAS RAGE",
            rage_req_title: "Requisitos",
            rage_req_1: "• Compatible con Windows 10 y 11 - Todas las versiones",
            rage_req_2: "• Compatible con todos los componentes CPU/GPU",
            rage_req_3: "• Modos Ventana, Sin Bordes y Pantalla Completa compatibles",
            rage_req_4: "• Todas las resoluciones compatibles",
            rage_req_5: "• No es compatible con SO personalizados",
            rage_req_6: "• Compatible con HVCI (Aislamiento del núcleo) On/Off",
            rage_aim_title: "Aimbot",
            rage_aim_1: "• Activar, Control de Retroceso, Comprobación de Visibilidad",
            rage_aim_2: "• Sin Dispersión, Disparo Automático (rage)",
            rage_aim_3: "• Mostrar FOV, Campo de Visión, Suavizado",
            rage_aim_4: "• Hueso de Apuntado, Punto de Mira de Retroceso",
            rage_vis_title: "Visuales",
            rage_vis_1: "• ESP de Caja, Tipo de Caja (Caja 3D)",
            rage_vis_2: "• Esqueleto, ESP de Cabeza",
            rage_vis_3: "• Icono de Agente, Icono de Arma",
            rage_vis_4: "• ESP de Distancia, Fresnel del Enemigo",
            rage_vis_5: "• Barra de Vida + Armadura, Línea de Disparo",
            rage_world_title: "Mundo",
            rage_world_1: "• Información de Spike, ESP de Habilidades",
            rage_world_2: "• Modo Noche, Modo Diablo, Aplicar Wukong",
            rage_world_3: "• Cambiador de Skybox (Rojo, Verde, Azul)",
            rage_world_4: "• Cielo Arcoíris, Velocidad de Arcoíris",
            rage_world_5: "• Opacidad de Nubes, Velocidad de Nubes, Intensidad",
            rage_out_title: "Contorno (Chams)",
            rage_out_left_title: "Contorno",
            rage_out_left_1: "• Activar Chams de Enemigo, Enemigo Galaxia",
            rage_out_left_2: "• Galaxia Propia (No activar si se usa V)",
            rage_out_left_3: "• Tipo (Siempre Contorno), Intensidad (Visible/Invisible)",
            rage_out_left_4: "• Fresnel de Mano, Color/Velocidad de Arcoíris",
            rage_out_left_5: "• Intensidad, Fresnel (Rojo, Verde, Azul)",
            rage_out_mid_title: "Color Visible",
            rage_out_mid_1: "• Borde Central (Rojo, Verde, Azul)",
            rage_out_mid_2: "• Borde Interno (Rojo, Verde, Azul)",
            rage_out_mid_3: "• Borde Externo (Rojo, Verde, Azul)",
            rage_out_right_title: "Color Invisible",
            rage_out_right_1: "• Borde Central (Rojo, Verde, Azul)",
            rage_out_right_2: "• Borde Interno (Rojo, Verde, Azul)",
            rage_out_right_3: "• Borde Externo (Rojo, Verde, Azul)",
            rage_misc_title: "Misceláneo",
            rage_misc_left_title: "Misceláneo",
            rage_misc_left_1: "• Omitir Tutorial, Mano en modo Malla",
            rage_misc_left_2: "• Tercera Persona, Tecla (T), Valor",
            rage_misc_left_3: "• Relación de Aspecto Personalizada, Valor",
            rage_misc_left_4: "• FOV Local Personalizado, Valor",
            rage_misc_left_5: "• Cambiador de Viewmodel, Valor",
            rage_misc_left_6: "• Cambiador de Tamaño Propio, Valor de Tamaño",
            rage_misc_mid_title: "Propio (Self)",
            rage_misc_mid_1: "• Bunny Hop, Agachado Rápido",
            rage_misc_mid_2: "• Brillo de Mano (Arcoíris, Intensidad, Velocidad, R, G, B)",
            rage_misc_mid_3: "• Brillo de Arma (R, V, A, Intensidad)",
            rage_misc_right_title: "Modificación del Cliente",
            rage_misc_right_1: "• Desbloquear Todo",
            rage_misc_right_2: "• Usar Cambiador de Buddy, ID de Buddy (467)",
            rage_antiaim_title: "Anti Aim",
            rage_antiaim_1: "• Activar Anti-Aim",
            rage_antiaim_2: "• Modo Pitch (Predeterminado), Modo Yaw (Predeterminado)",
            rage_price_title: "Precios",
            rage_price_3d: "3 DÍAS",
            rage_price_1w: "1 SEMANA",
            rage_price_1m: "1 MES",
            rage_price_lft: "LFT",
            unlock_notice: "¡En actualización!",
            purchase: "Comprar",
            purchase_modal_title: "SELECCIONA UN PRODUCTO",
            order_title_prefix: "Crear Pedido para: ",
            order_instruction_text: "manda foto de tu pedido a discord toma una captura de pantalla aqui <3",
            confirm_purchase_btn: "Pagar en Discord - Entrega Inmediata",
            order_summary_prefix: "Has seleccionado:",
            woofers_perm_features_title: "CARACTERÍSTICAS DE 1-PERM",
            woofers_perm_req_title: "Requisitos",
            woofers_perm_req_1: "• Admite Windows 10 Home / Pro - Todas las versiones",
            woofers_perm_req_2: "• No es compatible con SO personalizados",
            woofers_perm_req_3: "• Admite todos los componentes de CPU/GPU",
            woofers_perm_req_4: "• Se necesita un USB de 8GB",
            woofers_perm_req_5: "• Se requiere flasheo de BIOS",
            woofers_perm_req_6: "• TPM (Spoofing)",
            woofers_perm_mobo_title: "Placas Base Soportadas",
            woofers_perm_mobo_1: "• MSI",
            woofers_perm_mobo_2: "• ASUS",
            woofers_perm_mobo_locked: "BLOQUEADO INCLUIDO",
            woofers_perm_mobo_3: "• GIGABYTE",
            woofers_perm_mobo_4: "• ASROCK",
            woofers_perm_mobo_5: "• ACER PREDATOR",
            woofers_perm_mobo_6: "• HP",
            woofers_perm_mobo_7: "• LENOVO",
            woofers_perm_mobo_8: "• PORTÁTILES",
            woofers_perm_mobo_9: "• TODAS LAS DEMÁS PLACAS BASE",
            woofers_perm_ac_title: "Anti-Cheats Soportados",
            woofers_perm_ac_1: "• EasyAntiCheat [Torneos de Fortnite Incluidos]",
            woofers_perm_ac_2: "• Vanguard",
            woofers_perm_ac_3: "• Toda la información de Anti-Cheats de perm v1"
        },
        en: {
            welcome: "Welcome to",
            title: "Fancy Services",
            main_title: "Fancy Services",
            category_valorant: "VALORANT",
            category_bo6: "Bo6",
            category_fortnite: "FORTNITE",
            category_woofers: "WOOFERS",
            category_accounts: "ACCOUNTS",
            valorant_modal_title: "VALORANT PRODUCTS",
            accounts_modal_title: "ACCOUNTS",
            bo6_modal_title: "BO6 PRODUCTS",
            fortnite_modal_title: "FORTNITE PRODUCTS",
            woofers_modal_title: "WOOFERS PRODUCTS",
            slotted_product: "SLOTTED",
            rage_product: "RAGE",
            external_product: "EXTERNAL",
            unlock_product: "UNLOCK",
            bo6_external_product: "external",
            bo6_internal_spoofer_product: "internal+spoofer",
            woofers_perm_product: "1-PERM",
            fortnite_external_product: "EXTERNAL",
            bo6_ext_title: "External Features",
            bo6_ext_req_title: "Requirements",
            bo6_ext_req_1: "• Windows 10 + Windows 11 (21H2 - 22H2) Supported",
            bo6_ext_req_2: "• Windows 11 23H2 Supported",
            bo6_ext_req_3: "• Windows 11 24H2 Supported",
            bo6_ext_req_4: "• Battlenet, Steam and XBOX GAMEPASS Supported",
            bo6_ext_req_5: "• Controller Supported",
            bo6_ext_aim_title: "Aimbot - Features",
            bo6_ext_aim_1: "• Predict Aim",
            bo6_ext_aim_2: "• Aiming Methods: Distance, Crosshair",
            bo6_ext_aim_3: "• Controller Support",
            bo6_ext_aim_4: "• Two Aim Keys",
            bo6_ext_aim_5: "• Ignore Downed Players",
            bo6_ext_aim_6: "• Ignore Visibility",
            bo6_ext_aim_7: "• Ignore Near FOV",
            bo6_ext_aim_8: "• Ignore AI",
            bo6_ext_pesp_title: "Player ESP - Features",
            bo6_ext_pesp_1: "• Enable ESP",
            bo6_ext_pesp_2: "• ESP Distance",
            bo6_ext_pesp_3: "• Box ESP",
            bo6_ext_pesp_4: "• Bone ESP",
            bo6_ext_pesp_5: "• ESP Mode: Full ESP",
            bo6_ext_aiesp_title: "AI ESP - Features",
            bo6_ext_aiesp_1: "• Enable ESP",
            bo6_ext_aiesp_2: "• ESP Distance",
            bo6_ext_aiesp_3: "• Box ESP",
            bo6_ext_aiesp_4: "• Bone ESP",
            bo6_ext_aiesp_5: "• ESP Mode: Full ESP, Visible, Not Visible",
            bo6_ext_aiesp_6: "• Line to Crosshair",
            bo6_ext_disp_content_title: "Display Content - Features",
            bo6_ext_disp_content_1: "• Name",
            bo6_ext_disp_content_2: "• Team",
            bo6_ext_disp_content_3: "• Distance",
            bo6_ext_disp_content_4: "• Health",
            bo6_ext_disp_content_5: "• Kills",
            bo6_ext_disp_content_6: "• Weapon",
            bo6_ext_disp_options_title: "Display Options - Features",
            bo6_ext_disp_options_1: "• Alerts",
            bo6_ext_disp_options_2: "• Alert Distance (0-300)",
            bo6_ext_disp_options_3: "• Crosshair",
            bo6_ext_disp_options_4: "• Adjustable Crosshair Size (0-100)",
            bo6_ext_disp_options_5: "• FOV",
            bo6_ext_disp_options_6: "• Bullet Hit",
            bo6_ext_misc_title: "Misc - Features",
            bo6_ext_misc_1: "• Reduce Recoil",
            bo6_ext_misc_2: "• Adjustable Power (0%-100%)",
            bo6_ext_misc_3: "• No Recoil",
            bo6_ext_misc_4: "• UAV",
            bo6_ext_misc_5: "• Third Person",
            bo6_is_title: "Internal + Spoofer Features",
            bo6_is_req_title: "Requirements",
            bo6_is_req_1: "• Windows 10 + Windows 11 (21H2 - 22H2) Supported",
            bo6_is_req_2: "• Windows 11 23H2 Supported",
            bo6_is_req_3: "• Windows 11 24H2 Supported",
            bo6_is_req_4: "• PC only",
            bo6_is_aim_title: "Aimbot - Features",
            bo6_is_aim_1: "• Aim Types: Standard, P-Silent",
            bo6_is_aim_2: "• Target Bones: Helmet, Head, Neck, Chest, Pelvis, Any",
            bo6_is_aim_3: "• Override Bones: Left Foot, Right Foot, Left Knee, Right Knee",
            bo6_is_aim_4: "• Smoothness & Prediction: Adjustable (0-100)",
            bo6_is_aim_5: "• Target Options: Enemies Only, Visible Check, Skip Downed/Self-Revive",
            bo6_is_aim_6: "• Prioritization: FOV + Distance, FOV Only, Distance Only",
            bo6_is_aim_7: "• FOV Range: Adjustable (0-1000) with visualization",
            bo6_is_aim_8: "• ESP Range: Adjustable (0-1000)",
            bo6_is_aim_9: "• Crosshair Display",
            bo6_is_antiaim_title: "Anti-Aim Features",
            bo6_is_antiaim_1: "• Spin Bot",
            bo6_is_antiaim_2: "• Jitter Bot",
            bo6_is_antiaim_3: "• 180° Turn Bot",
            bo6_is_vis_title: "Visual - Features",
            bo6_is_vis_player_title: "Player ESP",
            bo6_is_vis_player_1: "• Box, Corner Box, Filled Box, 3D Box",
            bo6_is_vis_player_2: "• Skeleton, Health Bar, Snaplines, Distance, Name",
            bo6_is_vis_player_3: "• Team ID, Weapon, Kill/Death Count, Outlines",
            bo6_is_vis_player_4: "• Compass ESP, Advanced UAV, Aim Warnings, Bullet Tracers",
            bo6_is_vis_loot_title: "Loot ESP",
            bo6_is_vis_loot_1: "• Ammo, Weapons, Money, Armor",
            bo6_is_vis_loot_2: "• Supply Boxes, Misc Items",
            bo6_is_vis_loot_3: "• Adjustable Range (1-1000)",
            bo6_is_comp_title: "Compass & Visuals - Features",
            bo6_is_comp_1: "• Targeting: Enemies Only, Visible Check, Compass Visuals, Aim Warnings",
            bo6_is_comp_2: "• Compass: Adjustable Zoom, Arrow Size/Fill, Rainbow Mode",
            bo6_is_rem_title: "Removals - Features",
            bo6_is_rem_1: "• Recoil Control: No Recoil, Adjustable Amount, No Sway",
            bo6_is_rem_2: "• Effect Removal: Disable Flinch, Stun, Flashbang, Shield Shake, Fog",
            bo6_is_rem_3: "• Visual Adjustments: Hide Weapon, Full Bright Mode",
            bo6_is_exp_title: "Exploits and Enhancements - Features",
            bo6_is_exp_1: "• Third-Person Mode",
            bo6_is_exp_2: "• Quick Actions: Instant Reload/Weapon Swap",
            bo6_is_exp_3: "• FOV Adjustment: Adjustable (1-200)",
            bo6_is_exp_4: "• Visual Enhancements: Skip Cutscenes, Big Mini Map, Developer Playlist, Unlock Loadouts",
            bo6_is_cust_title: "Customization - Features",
            bo6_is_cust_1: "• UI & Visual Colors: Fully customizable for ESP elements, Compass, Tracers",
            bo6_is_cust_2: "• Save/Load Configs: Up to 10 configurations ([F1]-[F5])",
            bo6_is_unlock_title: "Unlocks & Account - Features",
            bo6_is_unlock_1: "• Unlock All Items",
            bo6_is_unlock_2: "• Camo & Attachment Saver",
            bo6_is_unlock_3: "• Account Management: Clean Screenshots, Unlock/Revert Items, Bypass Profanity Filter, Custom Clantag",
            features: "FEATURES",
            fortnite_features_title: "FORTNITE FEATURES",
            fn_req_title: "Requirements",
            fn_req_1: "• Compatible on all motherboards, CPUs and GPU's",
            fn_req_2: "• Supports Windows 10 and 11",
            fn_req_3: "• Interactive Menu GUI",
            fn_req_4: "• Exceptional security and stealth to prevent detection",
            fn_aim_title: "Aimbot - Features",
            fn_aim_1: "• Enable Aimbot",
            fn_aim_2: "• Enable Prediction",
            fn_aim_3: "• Show FOV circle",
            fn_aim_4: "• Smoothnes",
            fn_aim_5: "• FOV",
            fn_aim_6: "• Aim Key setting",
            fn_aim_7: "• Aim Position",
            fn_vis_title: "Visuals - Features",
            fn_vis_1: "• Draw Box",
            fn_vis_2: "• Outlined Box",
            fn_vis_3: "• Filled Box",
            fn_vis_4: "• Box Thickness",
            fn_vis_5: "• Draw Distance",
            fn_vis_6: "• Outlined Distance",
            fn_vis_7: "• Draw Username",
            fn_vis_8: "• Draw Skeleton",
            fn_vis_9: "• Outlined Skeleton",
            fn_vis_10: "• Skeleton Thickness",
            fn_vis_11: "• Head Cỉcle",
            fn_vis_12: "• Warning Awareness",
            fn_misc_title: "Misc - Features",
            fn_misc_1: "• Radar",
            fn_misc_2: "• Stream Proof",
            fn_price_day: "1 Day",
            fn_price_week: "1 Week",
            fn_price_month: "1 Month",
            fn_price_lft: "Lifetime",
            ext_title: "FULL EXTERNAL",
            ext_req_title: "Requirements",
            ext_req_1: "Windows 10 & 11",
            ext_req_2: "All CPUs/GPUs",
            ext_req_3: "Windowed & Borderless Mode",
            ext_req_4: "Not compatible with modified OS",
            ext_req_5: "Core Isolation (HVCI) compatible",
            ext_vis_title: "Visuals (ESP)",
            ext_vis_1: "Box, head, health, skeleton, lines",
            ext_vis_2: "Radar & Minimap",
            ext_vis_3: "Weapons, spike, agents",
            ext_vis_4: "Lag-free mode",
            ext_aim_title: "Aimbot",
            ext_aim_1: "Aimbot + Magnet mode",
            ext_aim_2: "Show FOV & target line",
            ext_aim_3: "No Recoil (RCS) + smoothness",
            ext_misc_title: "Exploits & Miscellaneous",
            ext_misc_1: "Vanguard emulation",
            ext_misc_2: "Fake crosshair & Bunnyhop",
            ext_misc_3: "Stream-proof mode",
            ext_misc_4: "Panic button & show FPS",
            ext_price_title: "Pricing",
            ext_price_day: "DAY",
            ext_price_week: "WEEK",
            ext_price_month: "MONTH",
            ext_price_lft: "LFT",
            slot_title: "SLOTTED FEATURES",
            slot_req_title: "Requirements",
            slot_req_1: "Windows 10 Supported - All Versions",
            slot_req_2: "Windows 11 Supported - All Versions",
            slot_req_3: "Supports All CPU/GPU Components",
            slot_req_4: "Windowed & Borderless Supported",
            slot_req_5: "All Resolutions Supported",
            slot_req_6: "Does not support custom OS",
            slot_req_7: "Supports HVCI (Core isolation)",
            slot_vis_title: "Visuals - Features",
            slot_vis_1: "Recoil Crosshair",
            slot_vis_2: "2D Box & Filled Box",
            slot_vis_3: "Name & Distance",
            slot_vis_4: "Health Bar & Head Dot",
            slot_vis_5: "Team Filter",
            slot_aim_title: "Aimbot - Features",
            slot_aim_1: "Enable & RCS",
            slot_aim_2: "Target Team & Aim Key",
            slot_aim_3: "Aim Bone [Head/Chest/Leg]",
            slot_aim_4: "Smoothing & Fov",
            slot_aim_5: "Aimbot Distance",
            slot_misc_title: "Misc",
            slot_misc_1: "Crosshair & Fov Circle",
            slot_misc_2: "Target Aim Line",
            slot_misc_3: "Watermark",
            slot_misc_4: "Stream Proof",
            slot_misc_5: "Core Isolation [Supported]",
            slot_price_title: "Pricing",
            slot_price_15d: "15 Days",
            slot_price_1m: "1 Month",
            slot_price_lft: "Lifetime",
            rage_title: "RAGE FEATURES",
            rage_req_title: "Requirements",
            rage_req_1: "• Windows 10 & 11 Supported - All Versions",
            rage_req_2: "• Supports All CPU/GPU Components",
            rage_req_3: "• Windowed, Borderless & Fullscreen Supported",
            rage_req_4: "• All Resolutions Supported",
            rage_req_5: "• Does not support custom OS",
            rage_req_6: "• Supports HVCI (Core isolation) On/Off",
            rage_aim_title: "Aimbot",
            rage_aim_1: "• Enable, Recoil Control, Visible Check",
            rage_aim_2: "• No Spread, Auto Shoot (rage)",
            rage_aim_3: "• Show FOV, Field Of View, Smoothness",
            rage_aim_4: "• Aim Bone, Recoil Crosshair",
            rage_vis_title: "Visuals",
            rage_vis_1: "• Box ESP, Box Type (3D Box)",
            rage_vis_2: "• Skeleton, Head ESP",
            rage_vis_3: "• Agent Icon, Weapon Icon",
            rage_vis_4: "• Distance ESP, Enemy Fresnel",
            rage_vis_5: "• Health + Armor Bar, Snapline",
            rage_world_title: "World",
            rage_world_1: "• Spike Info, Abilities ESP",
            rage_world_2: "• Night Mode, Devil Mode, Apply Wukong",
            rage_world_3: "• Skybox Changer (Red, Green, Blue)",
            rage_world_4: "• Rainbow Sky, Rainbow Speed",
            rage_world_5: "• Cloud Opacity, Cloud Speed, Intensity",
            rage_out_title: "Outline",
            rage_out_left_title: "Outline",
            rage_out_left_1: "• Enable Enemy Chams, Galaxy Enemy",
            rage_out_left_2: "• Self Galaxy (Do not enable if using V)",
            rage_out_left_3: "• Type (Always Outline), Intensity (Visible/Invisible)",
            rage_out_left_4: "• Hand Fresnel, Rainbow Color/Speed",
            rage_out_left_5: "• Intensidad, Fresnel (Red, Green, Blue)",
            rage_out_mid_title: "Visible Color",
            rage_out_mid_1: "• Center Edge (Red, Green, Blue)",
            rage_out_mid_2: "• Inner Edge (Red, Green, Blue)",
            rage_out_mid_3: "• Outer Edge (Red, Green, Blue)",
            rage_out_right_title: "Invisible Color",
            rage_out_right_1: "• Center Edge (Red, Green, Blue)",
            rage_out_right_2: "• Inner Edge (Red, Green, Blue)",
            rage_out_right_3: "• Outer Edge (Red, Green, Blue)",
            rage_misc_title: "Misc",
            rage_misc_left_title: "Miscellaneous",
            rage_misc_left_1: "• Skip Tutorial, Wireframe Hand",
            rage_misc_left_2: "• Third Person, Keybind (T), Value",
            rage_misc_left_3: "• Custom Aspect Ratio, Value",
            rage_misc_left_4: "• Custom Local FOV, Value",
            rage_misc_left_5: "• Viewmodel Changer, Value",
            rage_misc_left_6: "• Self Resizer, Size Value",
            rage_misc_mid_title: "Self",
            rage_misc_mid_1: "• Bunny Hop, Fast Crouch",
            rage_misc_mid_2: "• Hand Glow (Rainbow, Intensity, Speed, R, G, B)",
            rage_misc_mid_3: "• Gun Glow (R, G, B, Intensity)",
            rage_misc_right_title: "Client Modification",
            rage_misc_right_1: "• Unlock All",
            rage_misc_right_2: "• Use Buddy Changer, Buddy ID (467)",
            rage_antiaim_title: "Anti Aim",
            rage_antiaim_1: "• Enable Anti Aim",
            rage_antiaim_2: "• Mode Pitch (Default), Mode Yaw (Default)",
            rage_price_title: "Pricing",
            rage_price_3d: "3 DAYS",
            rage_price_1w: "1 WEEK",
            rage_price_1m: "1 MONTH",
            rage_price_lft: "LFT",
            unlock_notice: "Under Maintenance!",
            purchase: "Purchase",
            purchase_modal_title: "SELECT A PRODUCT",
            order_title_prefix: "Create Order for: ",
            order_instruction_text: "send a screenshot of your order to discord take a screenshot here <3",
            confirm_purchase_btn: "Pay on Discord - Instant Delivery",
            order_summary_prefix: "You have selected:",
            woofers_perm_features_title: "1-PERM FEATURES",
            woofers_perm_req_title: "Requirements",
            woofers_perm_req_1: "• Supports Windows 10 Home / Pro - All Versions",
            woofers_perm_req_2: "• Does not support custom OS",
            woofers_perm_req_3: "• Supports all CPU/GPU Components",
            woofers_perm_req_4: "• 8GB USB needed",
            woofers_perm_req_5: "• BIOS flash required",
            woofers_perm_req_6: "• TPM (Spoofing)",
            woofers_perm_mobo_title: "Supported Motherboards",
            woofers_perm_mobo_1: "• MSI",
            woofers_perm_mobo_2: "• ASUS",
            woofers_perm_mobo_locked: "LOCKED INCLUDED",
            woofers_perm_mobo_3: "• GIGABYTE",
            woofers_perm_mobo_4: "• ASROCK",
            woofers_perm_mobo_5: "• ACER PREDATOR",
            woofers_perm_mobo_6: "• HP",
            woofers_perm_mobo_7: "• LENOVO",
            woofers_perm_mobo_8: "• LAPTOPS",
            woofers_perm_mobo_9: "• ALL OTHER MOTHERBOARDS",
            woofers_perm_ac_title: "Supported Anti Cheats",
            woofers_perm_ac_1: "• EasyAntiCheat [Fortnite Tournaments Included]",
            woofers_perm_ac_2: "• Vanguard",
            woofers_perm_ac_3: "• All Anti-Cheats info de perm v1"
        }
    };

    // --- Language Functionality ---
    const setLanguage = (lang) => {
        if (lang === currentLanguage) return;
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.getElementById('lang-es').classList.toggle('active', lang === 'es');
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        currentLanguage = lang;
    };

    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    const savedLang = localStorage.getItem('language') || 'es';
    

    // --- Letter Animation ---
    const animateText = () => {
        const elementsToAnimate = document.querySelectorAll('.welcome-title, .welcome-subtitle');
        elementsToAnimate.forEach(el => {
            const text = el.textContent.trim();
            el.innerHTML = '';
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.animationDelay = `${index * 0.05}s`;
                el.appendChild(span);
            });
        });
    };

    // --- Intro Sequence ---
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        introScreen.style.opacity = '0';
        introScreen.style.pointerEvents = 'none';
    }, 2500);

    setTimeout(() => {
        // Make the main container visible and fade it in.
        mainContent.style.visibility = 'visible';
        mainContent.style.animation = 'fadeIn 0.5s forwards';

        // Animate thumbnails with a stagger effect
        const thumbnails = document.querySelectorAll('.thumbnail-grid .thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            const delay = 0.2 + (index * 0.1); // Stagger start
            thumbnail.style.animation = `card-enter 0.5s ease-out forwards ${delay}s`;
        });
    }, 3000);

    // --- 3D Text Effect on Mouse Move ---
    const welcomeContainer = document.querySelector('.welcome-container');
    welcomeContainer.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = welcomeContainer.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        const rotateX = y * -10;
        const rotateY = x * 10;
        welcomeContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    welcomeContainer.addEventListener('mouseleave', () => {
        welcomeContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });


    // --- Modal Logic ---
    const allModals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('[data-modal-target]');

    // Function to open a modal
    const openModal = (modal) => {
        if (modal == null) return;
        modal.classList.add('active');
    };

    // Function to close a modal
    const closeModal = (modal) => {
        if (modal == null) return;
        modal.classList.remove('active');
    };

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    allModals.forEach(modal => {
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            closeModal(modal);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });

    // --- Discord Link Logic ---
    document.querySelectorAll('.discord-link-btn').forEach(button => {
        button.addEventListener('click', () => {
            window.open('https://discord.gg/7psXFNgbd2', '_blank');
        });
    });

    // --- Purchase Flow Logic ---
    const purchaseOptionsModal = document.getElementById('purchase-options-modal');
    const orderSummaryModal = document.getElementById('order-summary-modal');
    const durationContainer = document.getElementById('duration-options-container');
    const finalOrderDetails = document.getElementById('final-order-details');
    const orderModalTitle = document.getElementById('order-modal-title');
    
    let currentProductKey = '';

    const getTranslation = (key, lang) => {
        return translations[lang][key] || key;
    };
    
    let currentLanguage = localStorage.getItem('language') || 'es';
    let currentCategory = '';

    const productsByCategory = {
        'VALORANT': {
            modalId: 'valorant-modal',
            title_key: 'valorant_modal_title',
            mainImage: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256193535970115604/valorant_2_art.png?ex=667fe61e&is=667e949e&hm=6a6b8969185a53e9612543d8a9e46955a82260e1e2d939c3e29a399f2e36611c&',
            products: [
                { 
                    id: 'slotted', 
                    name_key: 'slotted_product', 
                    image: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256249961314914314/valorant_art.png?ex=66801998&is=667ec818&hm=b88ced85312389a7a60b93a404996911c4314f8d29b28b7c7b4f53ab67657a4e&',
                    featuresModalId: 'slotted-modal',
                    pricing: { '15d': '$69.99', '1m': '$124.99', 'lft': '$299.99' }
                },
                { 
                    id: 'rage', 
                    name_key: 'rage_product', 
                    image: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256249961314914314/valorant_art.png?ex=66801998&is=667ec818&hm=b88ced85312389a7a60b93a404996911c4314f8d29b28b7c7b4f53ab67657a4e&',
                    featuresModalId: 'rage-modal',
                    pricing: { '3d': '$15', '1w': '$35', '1m': '$70', 'lft': '$180' }
                },
                { 
                    id: 'external', 
                    name_key: 'external_product', 
                    image: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256249961314914314/valorant_art.png?ex=66801998&is=667ec818&hm=b88ced85312389a7a60b93a404996911c4314f8d29b28b7c7b4f53ab67657a4e&',
                    featuresModalId: 'external-modal',
                    pricing: { 'day': '$10', 'week': '$30', 'month': '$50' }
                },
                { 
                    id: 'unlock', 
                    name_key: 'unlock_product', 
                    image: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256249961314914314/valorant_art.png?ex=66801998&is=667ec818&hm=b88ced85312389a7a60b93a404996911c4314f8d29b28b7c7b4f53ab67657a4e&',
                    featuresModalId: 'unlock-modal',
                    pricing: {},
                    isUpdating: true
                }
            ]
        },
        'ACCOUNTS': {
            modalId: 'accounts-modal',
            title_key: 'accounts_modal_title',
            mainImage: '',
            products: []
        },
        'Bo6': {
            modalId: 'bo6-modal',
            title_key: 'bo6_modal_title',
            mainImage: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256193593026744330/black_ops_6_art.jpg?ex=667fe62c&is=667e94ac&hm=4507c39798e404b93222e96d744b2075a407221d8b19a16f562491173663b15e&',
            products: [
                {
                    id: 'bo6-external',
                name_key: 'bo6_external_product',
                    image: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256250024963805184/bo6_art.png?ex=668019a2&is=667ec822&hm=137887d7b05652f130f68d712128911082d43193e2a222c54d39f4d1e2b5c754&',
                    featuresModalId: 'bo6-ext-modal',
                    pricing: { 'day': '$10', 'week': '$30', 'month': '$50' }
                },
                {
                    id: 'bo6-internal-spoofer',
                name_key: 'bo6_internal_spoofer_product',
                    image: 'https://cdn.discordapp.com/attachments/1247382433883164742/1256250024963805184/bo6_art.png?ex=668019a2&is=667ec822&hm=137887d7b05652f130f68d712128911082d43193e2a222c54d39f4d1e2b5c754&',
                    featuresModalId: 'bo6-is-modal',
                    pricing: { 'day': '$10', 'week': '$30', 'month': '$50' }
                }
            ]
        },
        'FORTNITE': {
            modalId: 'fortnite-modal',
            title_key: 'fortnite_modal_title',
            mainImage: 'https://cdn.discordapp.com/attachments/1347343400533360651/1386219445122502807/renega-Photoroom.png?ex=6858e8f6&is=68579776&hm=4903379969ad2b8f200a32ca46a728cc59913067cdb2d08024e5657122ec7410&',
            products: [
                {
                    id: 'fortnite-external',
                name_key: 'fortnite_external_product',
                image: 'https://cdn.discordapp.com/attachments/1347343400533360651/1386219445122502807/renega-Photoroom.png?ex=6858e8f6&is=68579776&hm=4903379969ad2b8f200a32ca46a728cc59913067cdb2d08024e5657122ec7410&',
                featuresModalId: 'fortnite-features-modal',
                pricing: {
                    'day': '$7.45',
                    'week': '$29.99',
                    'month': '$59.99',
                    'lft': '$249.99'
                }
            }
            ]
        },
        'WOOFERS': {
            modalId: 'woofers-modal',
            title_key: 'woofers_modal_title',
            mainImage: '',
            products: [
                {
                    id: 'woofers-perm',
                    name_key: 'woofers_perm_product',
                    image: 'https://cdn.discordapp.com/attachments/1347343400533360651/1386228993933705306/fcf8d352ade303f7070f269d8fd7e33a.gif?ex=6858f1db&is=6857a05b&hm=95cc7953530ec9ee6c28ca01ec2bc39945caf5dc048c1430cde49a5ee62ea81f&',
                    featuresModalId: 'woofers-perm-features-modal',
                    pricing: { 'onetime': '$30.00', 'lft': '$70.00' }
                }
            ]
        },
    };

    // --- Dynamic Purchase Modal Logic ---
    const populatePurchaseOptions = (category) => {
        const container = document.querySelector('#purchase-options-modal .purchase-options');
        container.innerHTML = ''; // Clear old options
        const categoryData = productsByCategory[category];

        if (!categoryData || !categoryData.products || categoryData.products.length === 0) {
            container.innerHTML = `<p>No products found for this category.</p>`;
            return;
        }

        categoryData.products.forEach(product => {
            if (product.isUpdating) return; // Skip updating products

            const button = document.createElement('button');
            button.className = 'purchase-option-btn product-select-btn';
            button.dataset.key = product.name_key;
            button.dataset.pricing = JSON.stringify(product.pricing);
            button.textContent = getTranslation(product.name_key, document.documentElement.lang);
            container.appendChild(button);
        });
    };
    
    document.querySelectorAll('.purchase-button-main').forEach(button => {
        button.addEventListener('click', () => {
            const categoryModal = button.closest('.modal');
            if (!categoryModal) return;

            // Find category key by modalId
            const categoryKey = Object.keys(productsByCategory).find(key => productsByCategory[key].modalId === categoryModal.id);
            
            if (categoryKey) {
                currentCategory = categoryKey;
                populatePurchaseOptions(currentCategory);
                openModal(purchaseOptionsModal);
            }
        });
    });

    const populateDurationOptions = (pricingData) => {
        durationContainer.innerHTML = ''; // Clear previous options
        finalOrderDetails.classList.add('hidden'); // Hide details until a duration is selected

        for (const [duration, price] of Object.entries(pricingData)) {
            const durationBtn = document.createElement('button');
            durationBtn.className = 'duration-option-btn';
            durationBtn.textContent = duration;
            durationBtn.dataset.price = price;
            durationContainer.appendChild(durationBtn);

            durationBtn.addEventListener('click', () => {
                // Handle selection state visual
                document.querySelectorAll('#duration-options-container .duration-option-btn').forEach(btn => btn.classList.remove('selected'));
                durationBtn.classList.add('selected');

                // Update and show the final summary
                const productName = getTranslation(currentProductKey, document.documentElement.lang);
                document.getElementById('order-summary-text').innerHTML = `${productName} &mdash; <span>(${duration})</span>`;
                document.getElementById('order-summary-price').textContent = price;
                finalOrderDetails.classList.remove('hidden');
            });
        }
    };

    document.querySelector('#purchase-options-modal .purchase-options').addEventListener('click', e => {
        if (e.target.classList.contains('product-select-btn')) {
            currentProductKey = e.target.dataset.key; // Store the key of the selected product
            const pricingData = JSON.parse(e.target.dataset.pricing);
            const productName = getTranslation(currentProductKey, document.documentElement.lang);
            
            // Update title of the next modal
            orderModalTitle.innerHTML = `${getTranslation('order_title_prefix', document.documentElement.lang)} <span style="color: #f0a500;">${productName}</span>`;

            populateDurationOptions(pricingData);
            openModal(document.querySelector('#order-summary-modal'));
            closeModal(document.querySelector('#purchase-options-modal'));
        }
    });

    document.querySelector('.confirm-purchase-btn').addEventListener('click', () => {
        window.open('https://discord.gg/7psXFNgbd2', '_blank');
    });

    // --- Particles.js Initialization ---
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // --- Initial Load ---
    setLanguage(savedLang);
    animateText();
}); 