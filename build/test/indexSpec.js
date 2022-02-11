"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('countries', () => {
    it('expects getAllCountries() should fetched all countries', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield index_1.default.getAllCountries();
        expect(response.length).toEqual(250);
        expect(response).toBeInstanceOf(Array);
        expect(response.status).toEqual(200);
        expect(response).toBeDefined();
    }));
    it('expects getCountryByRegion() should fetched countries by region', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield index_1.default.getCountriesByRegion();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toEqual(53);
        expect(response).toBeDefined();
        expect(response.status).toEqual(200);
    }));
    it('expects getCountryByName() should fetched countries by name', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield index_1.default.getCountriesByName();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toEqual(1);
        expect(response).toBeDefined();
        expect(response.status).toEqual(200);
    }));
});
