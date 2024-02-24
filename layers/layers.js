var wms_layers = [];


        var lyr_hibrido_0 = new ol.layer.Tile({
            'title': 'hibrido',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Bloques_1 = new ol.format.GeoJSON();
var features_Bloques_1 = format_Bloques_1.readFeatures(json_Bloques_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bloques_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bloques_1.addFeatures(features_Bloques_1);
var lyr_Bloques_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bloques_1, 
                style: style_Bloques_1,
                popuplayertitle: "Bloques",
                interactive: true,
                title: '<img src="styles/legend/Bloques_1.png" /> Bloques'
            });
var format_LineasSismicas_2 = new ol.format.GeoJSON();
var features_LineasSismicas_2 = format_LineasSismicas_2.readFeatures(json_LineasSismicas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineasSismicas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineasSismicas_2.addFeatures(features_LineasSismicas_2);
var lyr_LineasSismicas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineasSismicas_2, 
                style: style_LineasSismicas_2,
                popuplayertitle: "LineasSismicas",
                interactive: true,
                title: '<img src="styles/legend/LineasSismicas_2.png" /> LineasSismicas'
            });
var format_mun_3 = new ol.format.GeoJSON();
var features_mun_3 = format_mun_3.readFeatures(json_mun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mun_3.addFeatures(features_mun_3);
var lyr_mun_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mun_3, 
                style: style_mun_3,
                popuplayertitle: "mun",
                interactive: true,
                title: '<img src="styles/legend/mun_3.png" /> mun'
            });
var format_pozos_4 = new ol.format.GeoJSON();
var features_pozos_4 = format_pozos_4.readFeatures(json_pozos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pozos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pozos_4.addFeatures(features_pozos_4);
var lyr_pozos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pozos_4, 
                style: style_pozos_4,
                popuplayertitle: "pozos",
                interactive: true,
                title: '<img src="styles/legend/pozos_4.png" /> pozos'
            });
var format_rios_princ_5 = new ol.format.GeoJSON();
var features_rios_princ_5 = format_rios_princ_5.readFeatures(json_rios_princ_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_princ_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_princ_5.addFeatures(features_rios_princ_5);
var lyr_rios_princ_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_princ_5, 
                style: style_rios_princ_5,
                popuplayertitle: "rios_princ",
                interactive: true,
                title: '<img src="styles/legend/rios_princ_5.png" /> rios_princ'
            });

lyr_hibrido_0.setVisible(true);lyr_Bloques_1.setVisible(true);lyr_LineasSismicas_2.setVisible(true);lyr_mun_3.setVisible(true);lyr_pozos_4.setVisible(true);lyr_rios_princ_5.setVisible(true);
var layersList = [lyr_hibrido_0,lyr_Bloques_1,lyr_LineasSismicas_2,lyr_mun_3,lyr_pozos_4,lyr_rios_princ_5];
lyr_Bloques_1.set('fieldAliases', {'CONTRAT_ID': 'CONTRAT_ID', 'CONTRATO_N': 'CONTRATO_N', 'AREA_NOMBR': 'AREA_NOMBR', 'FECHA_FIRM': 'FECHA_FIRM', 'CLASIFICAC': 'CLASIFICAC', 'TIPO_CONTR': 'TIPO_CONTR', 'ESTAD_AREA': 'ESTAD_AREA', 'SUBTIPO': 'SUBTIPO', 'OPERADOR': 'OPERADOR', 'OPR_ABR': 'OPR_ABR', 'AREA_HA': 'AREA_HA', 'CUENCA_SED': 'CUENCA_SED', 'SUPERFICIE': 'SUPERFICIE', 'YACIMIENTO': 'YACIMIENTO', 'PROCESO': 'PROCESO', 'LEYENDA': 'LEYENDA', 'URL_MINUTA': 'URL_MINUTA', });
lyr_LineasSismicas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'object_key': 'object_key', 'survey_nam': 'survey_nam', 'line_name': 'line_name', 'company_ke': 'company_ke', 'company_na': 'company_na', 'operator_k': 'operator_k', 'operator_n': 'operator_n', 'channel_nu': 'channel_nu', 'fold': 'fold', 'line_lengt': 'line_lengt', 'arrang_typ': 'arrang_typ', 'reg_time': 'reg_time', 'sample_rat': 'sample_rat', 'max_offset': 'max_offset', 'azimut': 'azimut', 'ano_adq': 'ano_adq', 'datum_key': 'datum_key', 'recept_dis': 'recept_dis', 'shot_dis': 'shot_dis', 'datum': 'datum', 'comment': 'comment', 'tramo_line': 'tramo_line', 'Punto_Inic': 'Punto_Inic', 'Punto_Fina': 'Punto_Fina', 'update_dat': 'update_dat', 'Shape_Leng': 'Shape_Leng', 'MINIATURA': 'MINIATURA', });
lyr_mun_3.set('fieldAliases', {'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', });
lyr_pozos_4.set('fieldAliases', {'object_key': 'object_key', 'uwi': 'uwi', 'well_name': 'well_name', 'well_count': 'well_count', 'departamen': 'departamen', 'well_cou_1': 'well_cou_1', 'well_tvd': 'well_tvd', 'well_kb_el': 'well_kb_el', 'rotary_ele': 'rotary_ele', 'well_drill': 'well_drill', 'well_groun': 'well_groun', 'field_abre': 'field_abre', 'geologic_p': 'geologic_p', 'contract_k': 'contract_k', 'contrato': 'contrato', 'well_longi': 'well_longi', 'well_latit': 'well_latit', 'well_x_coo': 'well_x_coo', 'well_y_coo': 'well_y_coo', 'well_x_dep': 'well_x_dep', 'well_y_dep': 'well_y_dep', 'datum_key': 'datum_key', 'datum': 'datum', 'well_sist_': 'well_sist_', 'well_x_c_1': 'well_x_c_1', 'well_y_c_1': 'well_y_c_1', 'well_x_d_1': 'well_x_d_1', 'well_y_d_1': 'well_y_d_1', 'operator_k': 'operator_k', 'operator': 'operator', 'well_spud_': 'well_spud_', 'quality_co': 'quality_co', 'coord_qual': 'coord_qual', 'document_k': 'document_k', 'documento': 'documento', 'creation_d': 'creation_d', 'shape_ANH': 'shape_ANH', 'comment': 'comment', 'certificac': 'certificac', 'certified_': 'certified_', 'well_compl': 'well_compl', 'well_class': 'well_class', 'well_cla_1': 'well_cla_1', 'well_statu': 'well_statu', 'well_sta_1': 'well_sta_1', 'well_type_': 'well_type_', 'wellType': 'wellType', 'deviation_': 'deviation_', 'wellDeviat': 'wellDeviat', 'fecha_actu': 'fecha_actu', 'inserted_b': 'inserted_b', 'entitlemen': 'entitlemen', 'epis_loade': 'epis_loade', 'kedit_last': 'kedit_last', 'kedit_loca': 'kedit_loca', 'actualizad': 'actualizad', 'update_dat': 'update_dat', });
lyr_rios_princ_5.set('fieldAliases', {'ID_ST': 'ID_ST', 'NOMBRE': 'NOMBRE', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Bloques_1.set('fieldImages', {'CONTRAT_ID': '', 'CONTRATO_N': '', 'AREA_NOMBR': '', 'FECHA_FIRM': '', 'CLASIFICAC': '', 'TIPO_CONTR': '', 'ESTAD_AREA': '', 'SUBTIPO': '', 'OPERADOR': '', 'OPR_ABR': '', 'AREA_HA': '', 'CUENCA_SED': '', 'SUPERFICIE': '', 'YACIMIENTO': '', 'PROCESO': '', 'LEYENDA': '', 'URL_MINUTA': '', });
lyr_LineasSismicas_2.set('fieldImages', {'OBJECTID': '', 'object_key': '', 'survey_nam': '', 'line_name': '', 'company_ke': '', 'company_na': '', 'operator_k': '', 'operator_n': '', 'channel_nu': '', 'fold': '', 'line_lengt': '', 'arrang_typ': '', 'reg_time': '', 'sample_rat': '', 'max_offset': '', 'azimut': '', 'ano_adq': '', 'datum_key': '', 'recept_dis': '', 'shot_dis': '', 'datum': '', 'comment': '', 'tramo_line': '', 'Punto_Inic': '', 'Punto_Fina': '', 'update_dat': '', 'Shape_Leng': '', 'MINIATURA': '', });
lyr_mun_3.set('fieldImages', {'ID_ESPACIA': 'TextEdit', 'AREA_OFICI': 'TextEdit', 'ENTIDAD_TE': 'TextEdit', 'NOM_DEPART': 'TextEdit', 'NOM_MUNICI': 'TextEdit', 'COD_DEPTO': 'TextEdit', });
lyr_pozos_4.set('fieldImages', {'object_key': '', 'uwi': '', 'well_name': '', 'well_count': '', 'departamen': '', 'well_cou_1': '', 'well_tvd': '', 'well_kb_el': '', 'rotary_ele': '', 'well_drill': '', 'well_groun': '', 'field_abre': '', 'geologic_p': '', 'contract_k': '', 'contrato': '', 'well_longi': '', 'well_latit': '', 'well_x_coo': '', 'well_y_coo': '', 'well_x_dep': '', 'well_y_dep': '', 'datum_key': '', 'datum': '', 'well_sist_': '', 'well_x_c_1': '', 'well_y_c_1': '', 'well_x_d_1': '', 'well_y_d_1': '', 'operator_k': '', 'operator': '', 'well_spud_': '', 'quality_co': '', 'coord_qual': '', 'document_k': '', 'documento': '', 'creation_d': '', 'shape_ANH': '', 'comment': '', 'certificac': '', 'certified_': '', 'well_compl': '', 'well_class': '', 'well_cla_1': '', 'well_statu': '', 'well_sta_1': '', 'well_type_': '', 'wellType': '', 'deviation_': '', 'wellDeviat': '', 'fecha_actu': '', 'inserted_b': '', 'entitlemen': '', 'epis_loade': '', 'kedit_last': '', 'kedit_loca': '', 'actualizad': '', 'update_dat': '', });
lyr_rios_princ_5.set('fieldImages', {'ID_ST': '', 'NOMBRE': '', 'SHAPE_LEN': '', });
lyr_Bloques_1.set('fieldLabels', {'CONTRAT_ID': 'no label', 'CONTRATO_N': 'no label', 'AREA_NOMBR': 'no label', 'FECHA_FIRM': 'no label', 'CLASIFICAC': 'no label', 'TIPO_CONTR': 'no label', 'ESTAD_AREA': 'no label', 'SUBTIPO': 'no label', 'OPERADOR': 'no label', 'OPR_ABR': 'no label', 'AREA_HA': 'no label', 'CUENCA_SED': 'no label', 'SUPERFICIE': 'no label', 'YACIMIENTO': 'no label', 'PROCESO': 'no label', 'LEYENDA': 'no label', 'URL_MINUTA': 'no label', });
lyr_LineasSismicas_2.set('fieldLabels', {'OBJECTID': 'no label', 'object_key': 'no label', 'survey_nam': 'no label', 'line_name': 'no label', 'company_ke': 'no label', 'company_na': 'no label', 'operator_k': 'no label', 'operator_n': 'no label', 'channel_nu': 'no label', 'fold': 'no label', 'line_lengt': 'no label', 'arrang_typ': 'no label', 'reg_time': 'no label', 'sample_rat': 'no label', 'max_offset': 'no label', 'azimut': 'no label', 'ano_adq': 'no label', 'datum_key': 'no label', 'recept_dis': 'no label', 'shot_dis': 'no label', 'datum': 'no label', 'comment': 'no label', 'tramo_line': 'no label', 'Punto_Inic': 'no label', 'Punto_Fina': 'no label', 'update_dat': 'no label', 'Shape_Leng': 'no label', 'MINIATURA': 'no label', });
lyr_mun_3.set('fieldLabels', {'ID_ESPACIA': 'no label', 'AREA_OFICI': 'no label', 'ENTIDAD_TE': 'no label', 'NOM_DEPART': 'no label', 'NOM_MUNICI': 'no label', 'COD_DEPTO': 'no label', });
lyr_pozos_4.set('fieldLabels', {'object_key': 'no label', 'uwi': 'no label', 'well_name': 'no label', 'well_count': 'no label', 'departamen': 'no label', 'well_cou_1': 'no label', 'well_tvd': 'no label', 'well_kb_el': 'no label', 'rotary_ele': 'no label', 'well_drill': 'no label', 'well_groun': 'no label', 'field_abre': 'no label', 'geologic_p': 'no label', 'contract_k': 'no label', 'contrato': 'no label', 'well_longi': 'no label', 'well_latit': 'no label', 'well_x_coo': 'no label', 'well_y_coo': 'no label', 'well_x_dep': 'no label', 'well_y_dep': 'no label', 'datum_key': 'no label', 'datum': 'no label', 'well_sist_': 'no label', 'well_x_c_1': 'no label', 'well_y_c_1': 'no label', 'well_x_d_1': 'no label', 'well_y_d_1': 'no label', 'operator_k': 'no label', 'operator': 'no label', 'well_spud_': 'no label', 'quality_co': 'no label', 'coord_qual': 'no label', 'document_k': 'no label', 'documento': 'no label', 'creation_d': 'no label', 'shape_ANH': 'no label', 'comment': 'no label', 'certificac': 'no label', 'certified_': 'no label', 'well_compl': 'no label', 'well_class': 'no label', 'well_cla_1': 'no label', 'well_statu': 'no label', 'well_sta_1': 'no label', 'well_type_': 'no label', 'wellType': 'no label', 'deviation_': 'no label', 'wellDeviat': 'no label', 'fecha_actu': 'no label', 'inserted_b': 'no label', 'entitlemen': 'no label', 'epis_loade': 'no label', 'kedit_last': 'no label', 'kedit_loca': 'no label', 'actualizad': 'no label', 'update_dat': 'no label', });
lyr_rios_princ_5.set('fieldLabels', {'ID_ST': 'no label', 'NOMBRE': 'no label', 'SHAPE_LEN': 'no label', });
lyr_rios_princ_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});